import * as yup from 'yup'

export const schema = yup.object().shape({
  dia: yup.date().required(),
  turno: yup.string().required(),
  trocoInicial: yup.number().required(),
  moedasInicial: yup.number().required(),
  vendaProdutos: yup.number().required(),
  recebimentos: yup.number().required(),
  trocoFinal: yup.number().required(),
  moedasFinal: yup.number().required(),
  totalFiado: yup.number().required(),
  cartoesPix: yup.number().required(),
  dinheiro: yup.number().required(),
  retiradaCaixa: yup.number().required(),
  arla: yup.number().required(),
  vales: yup.number().required(),
  somaLeituras: yup.number().required(),
  somaTotalA: yup.number().required(),
  somaTotalB: yup.number().required(),
  diferenca: yup.number().required(),
})
