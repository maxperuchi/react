import { FormProvider as ReactHookFormProvider } from 'react-hook-form'

export const FormProvider = ({ children, ...other }) => (
  <ReactHookFormProvider {...other}>
    {children}
  </ReactHookFormProvider>
)