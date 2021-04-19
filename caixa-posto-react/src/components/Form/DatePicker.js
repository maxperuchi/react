import { useFormContext, Controller } from 'react-hook-form'
import { TextField } from '@material-ui/core'
import { path } from 'ramda'
import { getDateString } from '../../helpers/dateConverter'

export const DatePicker = ({ name, label, defaultValue }) => {
  const {
    register,
    formState: { isSubmitting },
    errors,
    control,
  } = useFormContext()

  const disabled = isSubmitting
  const helperText = path([name, 'message'], errors)
  const error = Boolean(helperText)

  return (
    <Controller
      as={
        <TextField
          name={name}
          label={label}
          ref={register}
          disabled={disabled}
          helperText={helperText}
          error={error}
          variant='filled'
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      }
      name={name}
      control={control}
      defaultValue={getDateString(defaultValue)}
    />
  )
}
