import { type IPropsIcon } from "@lib/models/Icon.interface";
import { type FC } from "react";


export const DraftsIcon: FC<IPropsIcon> = ({
  className,
  color,
  styles
}): JSX.Element => {
  return (
    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.87012H3C2.46957 1.87012 1.96086 2.08083 1.58579 2.4559C1.21071 2.83098 1 3.33968 1 3.87012V19.8701C1 20.4006 1.21071 20.9093 1.58579 21.2843C1.96086 21.6594 2.46957 21.8701 3 21.8701H15C15.5304 21.8701 16.0391 21.6594 16.4142 21.2843C16.7893 20.9093 17 20.4006 17 19.8701V8.87012M10 1.87012V8.87012H17M10 1.87012L17 8.87012" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}