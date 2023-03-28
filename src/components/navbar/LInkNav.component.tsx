import Link from 'next/link'
import { type FC } from 'react'

export interface IPropsLinkNav {
  href?: string
  label?: string
  icon?: JSX.Element | React.ReactNode
  classNameLink?: string
  children?: React.ReactNode
}

export const LinkNav: FC<IPropsLinkNav> = ({
  href,
  label,
  icon,
  classNameLink,
  children,
  ...props
}): JSX.Element => {
  if (href === undefined || href === null)
    return (
      <button
        className={`w-full h-full flex flex-row gap-3 px-2 items-center ${
          classNameLink ?? ''
        } `}
        {...props}>
        {Boolean(icon) && <span>{icon}</span>}
        {label !== undefined ? (
          <span className=' tracking-wide'>{label}</span>
        ) : (
          children
        )}
      </button>
    )

  return (
    <>
      <Link
        href={href}
        className={`w-full h-full flex flex-row gap-3 justify-start items-center px-2 ${
          classNameLink ?? ''
        } `}>
        {Boolean(icon) && <span>{icon}</span>}
        {label !== undefined ? (
          <span className=' tracking-wide'>{label}</span>
        ) : (
          children
        )}
      </Link>
    </>
  )
}
