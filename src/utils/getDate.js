export const getDate = () => {
    const today = new Date()
    const dd = today.getDate()
    const mm = today.getMonth() + 1 // January is 0!
    const yyyy = today.getFullYear()
    return {
        day: dd,
        month: mm,
        year: yyyy,
        date: `${mm}/${dd} ${yyyy}`,
    }
}
