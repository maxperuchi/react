import { instance } from 'http'
import { useMutation } from 'react-query'

export const useCustomMutation = (options = {}) =>
  useMutation(async (data) => {
    data.leituras = options.leituras
    console.log(data)
    return await instance.post('/caixa', data)
  }, {
    ...options,
  })
