import Please from '../../../utils/Please'

export const getCategoryData = ledgerEntries => {
    const categoryNames = []
    const categories = []
    ledgerEntries.forEach((entry, i) => {
        const index = categoryNames.indexOf(entry.category)
        if (index === -1) {
            categoryNames.push(entry.category)
            categories.push({
                key: i,
                name: entry.category,
                value: parseInt(entry.amount),
                svg: { fill: '' },
            })
        } else {
            categories[index].value += parseInt(entry.amount)
        }
    })

    const colors = Please.make_color({ colors_returned: categories.length })
    categories.forEach((category, i) => {
        category.svg.fill = colors[i]
    })

    categories.sort((entryA, entryB) => entryA.value - entryB.value)

    return categories
}
