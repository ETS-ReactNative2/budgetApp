import { categories, filteredCategories } from '../../../constants/categories'
import { Dimensions } from 'react-native'
import { getDate } from '../../../utils/getDate'

const { width } = Dimensions.get('window')

export const getLineChartCategoryData = ({ ledgerEntries, unit, interval, threshold }) => {
    const categoryNames = []
    const data = []
    let total = 0
    const today = getDate()

    // Filter by time window
    const thisMonth = { month: today.month, year: today.year }
    const lastMonth =
        today.month === 1
            ? { month: 12, year: today.year - 1 }
            : { month: today.month - 1, year: today.year }
    const twoMonthsBack =
        lastMonth.month === 1
            ? { month: 12, year: today.year - 1 }
            : { month: lastMonth.month - 1, year: today.year }
    const threeMonthsBack =
        twoMonthsBack.month === 1
            ? { month: 12, year: today.year - 1 }
            : { month: twoMonthsBack.month - 1, year: today.year }
    const oneYearBack = { month: lastMonth.month, year: today.year - 1 }

    const ledgerLength = ledgerEntries.length
    let firstEntryOfThisMonth = ledgerLength - 1
    let firstEntryOfLastMonth = ledgerLength - 1
    let firstEntryOfThreeMonthsBack = ledgerLength - 1
    let firstEntryOfOneYearBack = ledgerLength - 1
    let i

    for (i = ledgerLength - 1; i >= 0; --i) {
        if (ledgerEntries[i].year >= thisMonth.year && ledgerEntries[i].month >= thisMonth.month) {
            firstEntryOfThisMonth = i
        }
        if (ledgerEntries[i].year >= lastMonth.year && ledgerEntries[i].month >= lastMonth.month) {
            firstEntryOfLastMonth = i
        }
        if (ledgerEntries[i].year >= threeMonthsBack.year) {
            if (threeMonthsBack.month === 12 && [12, 1, 2].includes(ledgerEntries[i].month)) {
                firstEntryOfThreeMonthsBack = i
            } else if (
                threeMonthsBack.month === 11 &&
                [11, 12, 1].includes(ledgerEntries[i].month)
            ) {
                firstEntryOfThreeMonthsBack = i
            } else if (ledgerEntries[i].month >= threeMonthsBack.month) {
                firstEntryOfThreeMonthsBack = i
            }
        }
        if (
            (ledgerEntries[i].year === lastMonth.year &&
                ledgerEntries[i].month <= lastMonth.month) ||
            (ledgerEntries[i].year === oneYearBack.year &&
                ledgerEntries[i].month >= lastMonth.month)
        ) {
            firstEntryOfOneYearBack = i
        }
        console.log(i)
        console.log('firstEntryOfThisMonth', firstEntryOfThisMonth)
        console.log('firstEntryOfLastMonth', firstEntryOfLastMonth)
        console.log('firstEntryOfThreeMonthsBack', firstEntryOfThreeMonthsBack)
        console.log('firstEntryOfOneYearBack', firstEntryOfOneYearBack)
    }

    console.log('twoMonthsBack', twoMonthsBack)
    console.log('threeMonthsBack', threeMonthsBack)
    console.log('oneYearBack', oneYearBack)

    let timeFilteredEntries = []
    switch (interval) {
        case 'lastTwelveMonths':
            timeFilteredEntries = ledgerEntries.slice(
                firstEntryOfOneYearBack,
                firstEntryOfThisMonth,
            )
            break
        case 'lastThreeMonths':
            timeFilteredEntries = ledgerEntries.slice(
                firstEntryOfThreeMonthsBack,
                firstEntryOfThisMonth,
            )
            break
        case 'lastMonth':
            timeFilteredEntries = ledgerEntries.slice(firstEntryOfLastMonth, firstEntryOfThisMonth)
            break
        case 'thisMonth':
        default:
            console.log(ledgerEntries)
            timeFilteredEntries = ledgerEntries.slice(firstEntryOfThisMonth, ledgerLength)
            break
    }

    timeFilteredEntries.forEach(entry => {
        // Filter out certain categories (like transfer)
        if (!filteredCategories.includes(entry.category)) {
            // Check if we already have a tally for this category
            const index = categoryNames.indexOf(entry.category)
            // If not, add this category, and initiate the category tally
            if (index === -1) {
                categoryNames.push(entry.category)
                data.push({
                    key: entry.category,
                    name: entry.category,
                    rawValue: parseFloat(entry.amount),
                    svg: { fill: categories[entry.category].color },
                })
                // If the category already has an entry, add to the category tally.
            } else {
                data[index].rawValue += parseFloat(entry.amount)
            }
            // No matter what, increase a tally of the total amount of relevant spending.
            // We can use this total later, to exclude data below or above a threshold.
            total += parseFloat(entry.amount)
        }
    })
    // Sort the data from most to least.
    data.sort((categoryA, categoryB) => categoryB.rawValue - categoryA.rawValue)

    let thresholdFilteredData
    if (unit === 'percent') {
        console.log(data, threshold)
        thresholdFilteredData = data.filter(category => category.rawValue <= threshold * 10)
    } else {
        thresholdFilteredData = data.filter(category => category.rawValue <= threshold)
    }

    // Get the correct display value, based on the units arg.
    const displayData = thresholdFilteredData.map(category => {
        const percent = parseInt((category.rawValue / total) * 100, 10)
        const displayValue =
            unit === 'dollars'
                ? // dollars
                  `$${parseInt(category.rawValue, 10)}`
                : // percent
                  `${percent}%`
        const barWidth = (category.rawValue / thresholdFilteredData[0].rawValue) * (width - 30)
        return { ...category, percent, displayValue, barWidth }
    })
    console.log(displayData)
    return displayData
}
