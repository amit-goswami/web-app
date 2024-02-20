import React from 'react'
import { useFormContext } from '../form'
import { Container } from '../../atoms/container'
import { Text } from '../../atoms/text'

interface IFormInputProps {
  placeholder?: string
  showHideToggle?: boolean
  name: string
  label: string
  labelRequired?: boolean
  className?: string
  type?: string
  disabled?: boolean
}

export const FormInput: React.FC<IFormInputProps> = ({
  placeholder,
  name,
  label,
  labelRequired = false,
  disabled = false,
  className = '',
  type = 'text'
}) => {
  const { values, setValues, errors } = useFormContext()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <Container className={className}>
      <label
        htmlFor="street-address"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {labelRequired && <span className="text-red-500"> * </span>}
      </label>
      <Container className="mt-2">
        <input
          type={type}
          name={name}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent
           disabled:cursor-not-allowed disabled:text-gray-400"
          value={String(values[name] || '')}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {errors[name] && (
          <Text as="p" className="text-red-500 mt-1 text-sm">
            {errors[name]}
          </Text>
        )}
      </Container>
    </Container>
  )
}
