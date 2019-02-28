export const sortByDate = ledger => {
    function compare(a, b) {
        if (a.dateString < b.dateString) return -1
        if (a.dateString > b.dateString) return 1
        return 0
    }

    return ledger.sort(compare)
}
