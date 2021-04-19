import { React, useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import { defaultColumn } from './EditableCell'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const Leituras = ({ leituras, setLeituras }) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => leituras, [leituras])

    const tableInstance = useTable({
        columns,
        data,
        defaultColumn,
    })
    tableInstance.updateMyData = (index, id, value) => {
        leituras[index][id] = Number(value)
        setLeituras(leituras)
    }

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <TableContainer component={Paper}>
            <Table {...getTableProps}>
                <TableHead>
                    {
                        headerGroups.map(headerGroup => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                                    ))}
                            </TableRow>
                        ))
                    }
                </TableHead>
                <TableBody {...getTableBodyProps}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return <TableCell component='th' scope='row' {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                        })
                                    }
                                </TableRow>)
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}