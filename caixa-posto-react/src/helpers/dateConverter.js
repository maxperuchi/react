export const getDateString = (val) => {
    if (val === undefined || val === null) {
        return ''
    }
    const date = new Date(val)
    const year = date.getFullYear()
    const month = date.getMonth().toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
}