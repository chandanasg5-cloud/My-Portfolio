/**
 * A small corner flourish used to "illuminate" manuscript-style panels.
 * Place four of them in the corners of a relatively-positioned container.
 */
export default function Ornament({
  position,
  className = '',
}: {
  position: 'tl' | 'tr' | 'bl' | 'br'
  className?: string
}) {
  const rotation = {
    tl: 'rotate-0',
    tr: 'rotate-90',
    br: 'rotate-180',
    bl: '-rotate-90',
  }[position]

  const place = {
    tl: 'left-2 top-2',
    tr: 'right-2 top-2',
    bl: 'bottom-2 left-2',
    br: 'bottom-2 right-2',
  }[position]

  return (
    <svg
      aria-hidden
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={`pointer-events-none absolute text-accent/55 ${place} ${rotation} ${className}`}
    >
      <path d="M1 10 V3 a2 2 0 0 1 2 -2 H10" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M5 5 q7 0 9 9 M5 5 q0 7 9 9"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.8"
      />
      <circle cx="5" cy="5" r="1.3" fill="currentColor" />
    </svg>
  )
}
