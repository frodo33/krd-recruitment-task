import React, { FC } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { useWindowSize } from "../../hooks/useWindowSize"
import { Flex } from "../../layout/Flex.styles"
import { deviceType } from "../../theme/default/breakpoints"
import { mixins } from "../../theme/default/mixins"
import { Input } from "../common/input/Input"
import { StyledDebtsHeader, StyledSearchButton } from "./DebtsHeader.styles"

interface DebtsHeaderProps {}

export const DebtsHeader: FC<DebtsHeaderProps> = () => {
  const { tabletDevice } = deviceType
  const { width } = useWindowSize()
  const isDesktop = width >= tabletDevice
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
        width={isDesktop ? "50%" : "100%"}
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