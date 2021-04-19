import { Caixa } from './components/Caixa/Caixa'
import { makeStyles } from '@material-ui/core/styles'
import { CaixaPostoQueryClientProvider } from './QueryClientProvider'
import { CssBaseline } from '@material-ui/core'

const createStyles = makeStyles(() => ({

  mainArea: {
    display: 'flex',
    padding: '15px',
  }
}))

export const App = () => {
  const classes = createStyles()

  return (
    <CaixaPostoQueryClientProvider>
      <CssBaseline />
      <div className={classes.mainArea}>
        <Caixa />
      </div>
    </CaixaPostoQueryClientProvider>
  )
}
