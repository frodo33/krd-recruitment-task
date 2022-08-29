import React, { FC, FormEvent } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { api } from "../../api/api"
import { getFilteredDebts } from "../../api/routes"
import { useDebts } from "../../hooks/useDebts"
import { useValidation } from "../../hooks/useValidation"
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
  const { initialDebts, setDebts } = useDebts()
  const { searchSchema } = useValidation()
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: yupResolver(searchSchema),
  })

  console.log(errors, "errors")

  const filterDebts = async ({ debtsSearch }: any) => {
    try {
      if(debtsSearch.length < 3) {
        setDebts(initialDebts)
      } else {
        const { data } = await api.request({
          ...getFilteredDebts,
          data: {
            "NIP": debtsSearch,
            "Name": debtsSearch
          }
        })
        setDebts(data)
      }
    }
    catch (error) {
      console.log(error, "error")
    }
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if(target.value.length < 3) {
      setDebts(initialDebts)
    }
    if(target.value.length === 0) {
      clearErrors()
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
          onChangeHandler={handleChange}
        />
        <StyledSearchButton>
          Szukaj
        </StyledSearchButton>
      </Flex>
    </StyledDebtsHeader>
  )
}