import React, { FC, FormEvent } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
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
  const { initialDebts, setDebts, filterDebts, loading } = useDebts()
  const { searchSchema } = useValidation()
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: yupResolver(searchSchema),
  })

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
        <StyledSearchButton loader={loading}>
          Szukaj
          <div><span></span></div>
        </StyledSearchButton>
      </Flex>
    </StyledDebtsHeader>
  )
}