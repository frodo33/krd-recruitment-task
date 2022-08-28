import React, { FC } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Flex } from "../../layout/Flex.styles"
import { mixins } from "../../theme/default/mixins"
import { Input } from "../common/input/Input"
import { StyledDebtsHeader, StyledSearchButton } from "./DebtsHeader.styles"

interface DebtsHeaderProps {}

export const DebtsHeader: FC<DebtsHeaderProps> = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  })

  return (
    <StyledDebtsHeader>
      <Flex
        mt={mixins.spacing(6)}
      >
        <Input 
          type="text"
          name="debtsSearch"
          placeholder="Wyszukaj..."
          label="Podaj nip lub nazwę dłużnika"
          register={register}
          errors={errors}
        />
        <StyledSearchButton>
          Szukaj
        </StyledSearchButton>
      </Flex>
    </StyledDebtsHeader>
  )
}