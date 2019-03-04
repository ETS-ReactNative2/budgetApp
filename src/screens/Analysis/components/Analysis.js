import React from 'react'
import { ScrollView, Slider, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-paper'
import { HorizontaBarChart } from './HorizontalBarChart'
import { PieChartWithLabel } from './PieChartWithLabel'
import { Picker } from '../../../components/Picker'
import { getLineChartCategoryData } from '../utils/getLineChartCategoryData'

export class Analysis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: 'percent',
            interval: 'thisMonth',
            threshold: 100,
        }
        this.handleIntervalChange = this.handleIntervalChange.bind(this)
        this.handleUnitChange = this.handleUnitChange.bind(this)
    }

    handleUnitChange(unit) {
        const { threshold } = this.state
        const newVal = unit === 'percent' ? threshold / 10 : threshold * 10
        this.setState({
            unit,
            threshold: newVal,
        })
    }

    handleIntervalChange(interval) {
        this.setState({
            interval,
        })
    }

    render() {
        const { unit, interval, threshold } = this.state
        const { ledgerEntries } = this.props
        return (
            <ScrollView>
                <View style={styles.pickersContainer}>
                    <View style={styles.sliderContainer}>
                        <Text style={{ paddingLeft: 15, color: '#888' }}>{`Threshold value: ${
                            unit === 'dollars' ? '$' : ''
                        }${this.state.threshold}${unit === 'percent' ? '%' : ''}`}</Text>
                        <Slider
                            style={{ width: '90%' }}
                            step={unit === 'percent' ? 10 : 100}
                            minimumTrackTintColor="rgb(126, 89, 191)"
                            thumbTintColor="rgb(126, 89, 191)"
                            minimumValue={unit === 'percent' ? 10 : 100}
                            maximumValue={unit === 'percent' ? 100 : 1000}
                            value={this.state.threshold}
                            onValueChange={val => this.setState({ threshold: val })}
                        />
                    </View>

                    <Picker
                        value={this.state.unit}
                        onValueChange={this.handleUnitChange}
                        values={[
                            { label: 'Percent', value: 'percent' },
                            { label: 'Dollars', value: 'dollars' },
                        ]}
                        title="Unit"
                    />
                    <Picker
                        value={this.state.interval}
                        onValueChange={this.handleIntervalChange}
                        values={[
                            { label: 'Year', value: 'lastTwelveMonths' },
                            { label: '3 Mo', value: 'lastThreeMonths' },
                            { label: 'Last Mo', value: 'lastMonth' },
                            { label: 'This Mo', value: 'thisMonth' },
                        ]}
                        title="Interval"
                    />
                </View>

                <Divider />

                <View style={styles.lineChartContainer}>
                    <HorizontaBarChart
                        data={getLineChartCategoryData({
                            ledgerEntries,
                            unit,
                            interval,
                            threshold,
                        })}
                    />
                </View>

                <Divider />

                <View style={styles.pieChartContainer}>
                    <PieChartWithLabel
                        ledgerEntries={ledgerEntries}
                        unit={unit}
                        interval={interval}
                        threshold={threshold}
                    />
                </View>
                <Divider />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    lineChartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 50,
        paddingHorizontal: 15,
    },
    pieChartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
    },
    pickersContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingVertical: 30,
    },
    sliderContainer: {
        paddingBottom: 10,
    },
})
