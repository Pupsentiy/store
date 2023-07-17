declare module '*.module.scss' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
  import type React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __IS_DEV__: boolean
