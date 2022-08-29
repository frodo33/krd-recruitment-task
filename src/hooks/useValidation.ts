import * as yup from "yup"

export const useValidation = (): yup.InferType<typeof searchSchema> => {
  const searchSchema = yup.object().shape({
    debtsSearch: yup
      .string()
      .min(3, "Musisz wpisać minimum 3 znaki."),
  }).required()

  return {
    searchSchema
  }
}