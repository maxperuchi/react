import { useQuery } from 'react-query'
import { http } from '../../http'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, TextField } from '@material-ui/core'
import { useCustomMutation } from './useCustomMutation'
import { schema } from './schema'
import { FormProvider, useForm, Input, Button, setAsyncError, DatePicker } from '../Form'
import { Button as MuiButton } from '@material-ui/core'
import { queryClient } from '../../QueryClientProvider'
import { Modal } from '@material-ui/core';
import { React, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Leituras } from '../Leituras/Leituras'

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Caixa = () => {
  const [leituras, setLeituras] = useState([])

  const classes = useStyles()

  const [modalStyle] = useState(getModalStyle);

  const formProps = useForm({ resolver: yupResolver(schema) })
  const { handleSubmit, setError } = formProps
  const { mutateAsync } = useCustomMutation({
    onError: setAsyncError(setError),
    leituras
  })
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  let turno = 'test'
  const { data, isSuccess, refetch } = useQuery('caixa', async () => http.get(`caixa/novo/${turno}`), {
    onError: setAsyncError(setError),
  })

  const getNovoCaixa = () => {
    refetch()
    queryClient.resetQueries('caixa')
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Novo Caixa</h2>
          <p id="simple-modal-description">
            <TextField
              name='novoTurno'
              label='Turno'
              variant='filled'
              fullWidth
              onChange={(e) => {
                turno = e.target.value
              }}
            />
            <MuiButton
              variant="contained"
              color="primary"
              onClick={() => {
                getNovoCaixa()
                handleClose()
              }}>
              Novo
            </MuiButton>
          </p>
        </div>
      </Modal>
      <div style={{ margin: '5px' }}>
        <h1>Caixa Posto - React</h1>
        <MuiButton
          variant="contained"
          color="primary"
          style={{ width: '100%' }}
          onClick={handleOpen}>
          Novo
      </MuiButton>
      </div>
      { isSuccess && <div>
        <FormProvider {...formProps}>
          <form onSubmit={handleSubmit(mutateAsync)}>
            <Grid item xs={12} style={{ margin: '5px' }}>
              <Button type='submit'>Salvar</Button>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <DatePicker name='dia' defaultValue={data.data.dia} label='Dia' />
              </Grid>
              <Grid item xs={2}>
                <Input name='turno' defaultValue={data.data.turno} label='Turno' />
              </Grid>
              <Grid item xs={2}>
                <Input name='trocoInicial' defaultValue={data.data.trocoInicial} label='Troco Inicial' />
              </Grid>
              <Grid item xs={2}>
                <Input name='moedasInicial' defaultValue={data.data.moedasInicial} label='Moedas Inicial' />
              </Grid>
              <Grid item xs={2}>
                <Input name='vendaProdutos' defaultValue={data.data.vendaProdutos} label='Venda Produtos' />
              </Grid>
              <Grid item xs={2}>
                <Input name='recebimentos' defaultValue={data.data.recebimentos} label='Recebimentos' />
              </Grid>
              <Grid item xs={2}>
                <Input name='trocoFinal' defaultValue={data.data.trocoFinal} label='Troco Final' />
              </Grid>
              <Grid item xs={2}>
                <Input name='moedasFinal' defaultValue={data.data.moedasFinal} label='Moedas Final' />
              </Grid>
              <Grid item xs={2}>
                <Input name='totalFiado' defaultValue={data.data.totalFiado} label='Total Fiado' />
              </Grid>
              <Grid item xs={2}>
                <Input name='cartoesPix' defaultValue={data.data.cartoesPix} label='Cartões Pix' />
              </Grid>
              <Grid item xs={2}>
                <Input name='dinheiro' defaultValue={data.data.dinheiro} label='Dinheiro' />
              </Grid>
              <Grid item xs={2}>
                <Input name='retiradaCaixa' defaultValue={data.data.retiradaCaixa} label='Retirada Caixa' />
              </Grid>
              <Grid item xs={2}>
                <Input name='arla' defaultValue={data.data.arla} label='Arla' />
              </Grid>
              <Grid item xs={2}>
                <Input name='vales' defaultValue={data.data.vales} label='Vales' />
              </Grid>
              <Grid item xs={2}>
                <Input name='somaLeituras' defaultValue={data.data.somaLeituras} label='Soma Leituras' />
              </Grid>
              <Grid item xs={2}>
                <Input name='somaTotalA' defaultValue={data.data.somaTotalA} label='Soma Total A' />
              </Grid>
              <Grid item xs={2}>
                <Input name='somaTotalB' defaultValue={data.data.somaTotalB} label='Soma Total B' />
              </Grid>
              <Grid item xs={2}>
                <Input name='diferenca' defaultValue={data.data.diferenca} label='Diferença' />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
        <Leituras leituras={data.data.leituras} setLeituras={(leiturasNovas) => setLeituras(leiturasNovas)} />
      </div>}
    </div>
  )
}