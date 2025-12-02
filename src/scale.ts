export function observeScale(
  target: HTMLElement,
  designHeight: number,
  onScale: (scale: number) => void,
  scaleMode: 'height' | 'width' | 'auto' = 'auto',
  designWidth: number = 1920
): ResizeObserver {
  const observer = new ResizeObserver((entries: any) => {
    for (const entry of entries) {
      const rectHeight = entry.contentRect.height
      const rectWidth = entry.contentRect.width
      let scaleVal: number
      if (scaleMode === 'height') {
        scaleVal = rectHeight / designHeight
      } else if (scaleMode === 'width') {
        scaleVal = rectWidth / designWidth
      } else {
        const designRatio = designWidth / designHeight
        if (rectWidth / rectHeight < designRatio) {
          scaleVal = rectWidth / designWidth
        } else {
          scaleVal = rectHeight / designHeight
        }
      }
      onScale(scaleVal)
    }
  })
  observer.observe(target)
  return observer
}