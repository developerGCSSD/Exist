import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TherapistSvg(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 40c0-7.732 6.268-14 14-14h8c7.732 0 14 6.268 14 14a6 6 0 01-6 6H12a6 6 0 01-6-6z"
        fill="#9FBAD1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 22c5.523 0 10-4.477 10-10S29.523 2 24 2 14 6.477 14 12s4.477 10 10 10zm-4 10a1 1 0 011 1v2h2a1 1 0 011 1v2a1 1 0 01-1 1h-2v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2v-2a1 1 0 011-1h2z"
        fill="#2A7CBE"
      />
    </Svg>
  )
}

export default TherapistSvg
