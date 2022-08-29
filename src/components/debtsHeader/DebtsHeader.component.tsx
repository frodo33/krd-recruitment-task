import React, { FC } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { api } from "../../api/api"
import { getFilteredDebts } from "../../api/routes"
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

  const filterDebts = async ({ debtsSearch }: any) => {
    console.log(debtsSearch, "lol")
    try {
      const { data } = await api.request({
        ...getFilteredDebts,
        data: {
          "NIP": debtsSearch,
          "Name": debtsSearch
        }
      })
    }
    catch (error) {
      console.log(error, "error")
    }
  }

  return (
    <StyledDebtsHeader>
      <Flex
        as="form"
        width={isDesktop ? "50%" : "100%"}
        mt={mixins.spacing(6)}
        onSubmit={handleSubmit(filterDebts)}
      >
        <Input 
          type="text"
          name="debtsSearch"
          placeholder="Wyszukaj..."
          label="Podaj nip lub nazwę dłużnika"
          register={register}
          errors={errors}
        />
        <StyledSearchButton
          // onClick={handleClick}
        >
          Szukaj
        </StyledSearchButton>
      </Flex>
    </StyledDebtsHeader>
  )
}