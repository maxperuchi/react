import { getDateString } from '../../helpers/dateConverter'

export const COLUMNS = [
    {
        Header: 'Bomba',
        accessor: (row) => {
            return 'B' + row.bomba.numero.toString()
        }
    },
    {
        Header: 'Termino',
        accessor: 'term'
    },
    {
        Header: 'Inicio',
        accessor: 'inic'
    },
    {
        Header: 'Afericao',
        accessor: 'afericao'
    },
    {
        Header: 'Litros',
        accessor: 'litros'
    },
    {
        Header: 'Valor',
        accessor: 'valor'
    },
    {
        Header: 'Data',
        accessor: (row) => {
            return getDateString(row.data)
        }
    },
]