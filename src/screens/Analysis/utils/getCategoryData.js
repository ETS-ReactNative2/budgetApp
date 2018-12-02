import { categories as categoriesObj } from '../../../constants/categories'

export const getCategoryData = (ledgerEntries, unit, interval) => {
    const categoryNames = []
    const categories = []
    let total = 0
    ledgerEntries.forEach(entry => {
        const index = categoryNames.indexOf(entry.category)
        if (index === -1) {
            categoryNames.push(entry.category)
            categories.push({
                key: entry.category,
                name: entry.category,
                rawValue: parseFloat(entry.amount),
                svg: { fill: categoriesObj[entry.category].color },
            })
        } else {
            categories[index].rawValue += parseFloat(entry.amount)
        }
        total += parseFloat(entry.amount)
    })

    categories.sort((categoryA, categoryB) => categoryA.value - categoryB.value)

    categories.forEach(category => {
        category.dollars = parseInt(category.rawValue)
        category.percent = parseInt((category.rawValue / total) * 100)
    })

    if (unit === 'percent') {
        categories.forEach(category => (category.value = category.percent))
    } else {
        categories.forEach(category => (category.value = category.dollars))
    }

    return categories.filter(category => category.percent > 1)
}
