import { type FC } from 'react'

export enum InputType {
  email = 'email',
  password = 'password',
  text = 'text',
  number = 'number',
  date = 'date'
}

export interface InputProps {
  classLabel?: string
  id: string
  type: InputType
  classLabelText?: string
  label: string | JSX.Element
  placeholder?: string
  classInput?: string
}

export const InputAtom: FC<InputProps> = ({
  id,
  classLabel,
  label,
  type,
  classInput,
  classLabelText,
  placeholder
}): JSX.Element => {
  return (
    <label htmlFor={id} className={classLabel ?? ''}>
      {/*  htmlFor */}
      <span className={classLabelText ?? ''}>
        {label}
        {/**
         * classLabel
         * label
         *
         */}
      </span>
      <input
        type={type}
        id={id}
        placeholder={placeholder ?? ''}
        className={classInput ?? ''}
      />
    </label>
  )
}
