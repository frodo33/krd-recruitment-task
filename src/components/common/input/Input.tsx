import React, { FC, ReactElement } from "react"
import { InputProps } from "./Input.types"
import { Flex } from "../../../layout/Flex.styles"
import {
  StyledInputWrapper,
  StyledInput,
  StyledErrorMessage,
  StyledInputLabel
} from "./Input.styles"
import { FieldErrors } from "react-hook-form"

export const Input: FC<InputProps> = ({
  children,
  type = "text",
  name,
  placeholder,
  label,
  register,
  errors,
  onChangeHandler,
  value,
}) => {
  const hasError = !!errors?.[name]

  const mapErrors = (errors: FieldErrors): JSX.Element | JSX.Element[] => {
    if(errors?.[name]?.types) {
      const messages = Object.values(errors[name]?.types as Record<string, string>).flatMap((value: string | unknown) => value)
      return messages.map((message: string | unknown, index: number): ReactElement => (
        <StyledErrorMessage key={index}>{message as string}</StyledErrorMessage>
      ))
    }
    return <StyledErrorMessage>{errors?.[name]?.message as string}</StyledErrorMessage>
  }

  return (
    <Flex direction="column">
      <StyledInputWrapper>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledInput
          id={name}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          hasError={hasError}
          value={value}
          onChange={onChangeHandler}
        />
        {children}
        {hasError && mapErrors(errors)}
      </StyledInputWrapper>
    </Flex>
  )}