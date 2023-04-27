import { type IPropsIcon } from "@lib/models/Icon.interface";
import { type FC } from "react";

export const DocumentIcon: FC<IPropsIcon> = ({
  className,
  color,
  styles
}): JSX.Element => {
  return (
    <>
      <svg className={className} viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles}>
        <path d="M16 5.87012C16 8.07926 14.2091 9.87012 12 9.87012C9.79086 9.87012 8 8.07926 8 5.87012M16 5.87012C16 3.66098 14.2091 1.87012 12 1.87012C9.79086 1.87012 8 3.66098 8 5.87012M16 5.87012H22.96M8 5.87012H1.05005" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )
}