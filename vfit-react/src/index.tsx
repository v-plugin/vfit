import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { observeScale } from './scale'

export type FitScaleOptions = {
  target?: string | HTMLElement
  designHeight?: number
  designWidth?: number
  scaleMode?: 'height' | 'width' | 'auto'
}

const FitScaleContext = createContext<number>(1)

export const useFitScale = () => useContext(FitScaleContext)

export const FitScaleProvider: React.FC<{ children: React.ReactNode; options?: FitScaleOptions }> = ({
  children,
  options = {},
}) => {
  const [scale, setScale] = useState(1)
  const { target, designHeight = 1080, designWidth = 1920, scaleMode = 'auto' } = options

  useEffect(() => {
    const rootEl = typeof target === 'string' ? document.querySelector(target) : target
    const targetEl = (rootEl || document.querySelector('#root') || document.body) as HTMLElement

    if (!targetEl) return

    const observer = observeScale(
      targetEl,
      designHeight,
      (v) => setScale(v),
      scaleMode,
      designWidth
    )

    return () => observer.disconnect()
  }, [target, designHeight, designWidth, scaleMode])

  return <FitScaleContext.Provider value={scale}>{children}</FitScaleContext.Provider>
}

export interface FitContainerProps {
  children?: React.ReactNode
  scale?: number
  top?: number
  bottom?: number
  left?: number
  right?: number
  unit?: string
  z?: number
  className?: string
  style?: React.CSSProperties
}

export const FitContainer: React.FC<FitContainerProps> = ({
  children,
  scale: propScale,
  top,
  bottom,
  left,
  right,
  unit = 'px',
  z = 300,
  className,
  style,
}) => {
  const contextScale = useFitScale()
  const currentScale = (propScale && propScale > 0) ? propScale : contextScale

  const origin = useMemo(() => {
    const hasRight = right !== undefined
    const hasBottom = bottom !== undefined
    if (hasRight && hasBottom) return '100% 100%'
    if (hasRight) return '100% 0'
    if (hasBottom) return '0 100%'
    return '0 0'
  }, [right, bottom])

  const positionStyle = useMemo(() => {
    const pos: React.CSSProperties = {
      position: 'absolute',
      transform: `scale(${currentScale})`,
      transformOrigin: origin,
      zIndex: z,
      willChange: 'transform',
      ...style
    }
    
    const processVal = (val: number | undefined, isTopLeft: boolean) => {
      if (val === undefined) return 'auto'
      if (unit === '%') return `${val}${unit}`
      return `${isTopLeft ? val * currentScale : val}${unit}`
    }

    pos.top = processVal(top, true)
    pos.bottom = processVal(bottom, false)
    pos.left = processVal(left, true)
    pos.right = processVal(right, false)

    return pos
  }, [currentScale, top, bottom, left, right, unit, z, origin, style])

  return (
    <div className={`fit-container ${className || ''}`} style={positionStyle}>
      {children}
    </div>
  )
}
