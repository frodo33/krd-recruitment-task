import React, { FC, ReactElement, useEffect, useState } from "react"
// import { ReactComponent as WarningIcon } from "../../../../assets/icons/warning.svg"
import { InputProps } from "./Input.types"
import { Flex } from "../../../layout/Flex.styles"
import {
  StyledInputWrapper,
  StyledInput,
  StyledErrorMessage,
  StyledInputLabel
} from "./Input.styles"

export const Input: FC<InputProps> = ({
  children,
  type = "text",
  name,
  placeholder,
  label,
  register,
  errors,
  isDisabled,
  defaultValue,
  value,
}) => {
  const hasError = !!errors?.[name]
  // const [isEmpty, setIsEmpty] = useState<boolean>(true)
  // const { onChange } = register(name)

  // const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
  //   ev.target.value.length ? setIsEmpty(false) : setIsEmpty(true)
  //   onChange(ev)
  // }

  // const mapErrors = (): JSX.Element | JSX.Element[] => {
  //   if(errors?.[name]?.types) {
  //     const messages = Object.values(errors[name]?.types).flatMap((value: string | unknown) => value)
  //     return messages.map((message: string | unknown, index: number): ReactElement => <StyledErrorMessage key={index}>{message}</StyledErrorMessage>)
  //   }
  //   return <StyledErrorMessage>{errors?.[name]?.message}</StyledErrorMessage>
  // }
  
  // useEffect(()=>{
  //   defaultValue && setIsEmpty(false)
  // },[])

  return (
    <Flex direction="column">
      <StyledInputWrapper>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledInput
          id={name}
          type={type}
          {...register(name)}
          name={name}
          placeholder={placeholder}
          hasError={hasError}
          value={value}
          // onChange={handleChange}
          disabled={isDisabled}
        />
        {children}
      </StyledInputWrapper>
      {/* {hasError && mapErrors()} */}
    </Flex>
  )}