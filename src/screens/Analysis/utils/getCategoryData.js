import { categories as categoriesObj } from '../../../constants/categories'

export const getCategoryData = ledgerEntries => {
    const categoryNames = []
    const categories = []
    ledgerEntries.forEach(entry => {
        const index = categoryNames.indexOf(entry.category)
        if (index === -1) {
            categoryNames.push(entry.category)
            categories.push({
                key: entry.category,
                name: entry.category,
                value: parseInt(entry.amount),
                svg: { fill: categoriesObj[entry.category].color },
            })
        } else {
            categories[index].value += parseInt(entry.amount)
        }
    })

    categories.sort((entryA, entryB) => entryA.value - entryB.value)

    return categories
}
