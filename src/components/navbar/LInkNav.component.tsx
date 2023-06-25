import Link from 'next/link'
import { type FC, type ReactNode } from 'react'

export interface IPropsLinkNav {
  href?: string
  label?: string
  icon?: JSX.Element | ReactNode
  classNameLink?: string
  children?: ReactNode
}

export const LinkNav: FC<IPropsLinkNav> = (props): JSX.Element => {
  const {
    href,
    label,
    icon,
    classNameLink,
    children
  } = props
  
  if (href === undefined || href === null)
    return (
      <button
        className={`w-full h-full flex flex-row gap-3  items-center ${classNameLink ?? ''
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
        className={`w-full h-full flex flex-row gap-3 justify-start items-center  ${classNameLink ?? ''
        } `}>
        {Boolean(icon) && <span>{icon}</span>}
        {label !== undefined ? (
          <span className=' tracking-wide text-white'>{label}</span>
        ) : (
          children
        )}
      </Link>
    </>
  )
}
