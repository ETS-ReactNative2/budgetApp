import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PieChartWithLabel } from './PieChartWithLabel'
import { Picker } from '../../../components/Picker'

export class Analysis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pieChartUnit: 'percent',
            pieChartInterval: 'year',
        }
        this.handlePieChartIntervalChange = this.handlePieChartIntervalChange.bind(this)
        this.handlePieChartUnitChange = this.handlePieChartUnitChange.bind(this)
    }

    handlePieChartUnitChange(unit) {
        this.setState({
            pieChartUnit: unit,
        })
    }

    handlePieChartIntervalChange(interval) {
        this.setState({
            pieChartInterval: interval,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <PieChartWithLabel
                        ledgerEntries={this.props.ledgerEntries}
                        unit={this.state.pieChartUnit}
                        interval={this.state.pieChartInterval}
                    />
                    <View style={styles.pickersContainer}>
                        <Picker
                            value={this.state.pieChartUnit}
                            onValueChange={this.handlePieChartUnitChange}
                            values={[
                                { label: 'Percent', value: 'percent' },
                                { label: 'Dollars', value: 'dollars' },
                            ]}
                            title="Unit"
                        />
                        <Picker
                            value={this.state.pieChartInterval}
                            onValueChange={this.handlePieChartIntervalChange}
                            values={[
                                { label: 'Year', value: 'year' },
                                { label: '3 Months', value: 'threeMonths' },
                                { label: 'Last Month', value: 'lastMonth' },
                            ]}
                            title="Interval"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    pickersContainer: { flexDirection: 'column', justifyContent: 'space-around' },
})

// {

//             <RadioButton.Group
//                     onValueChange={value => this.props.onValueChange(value)}
//                     value={this.props.value}
//                 >
//                     <View style={styles.radioContainer}>
//                         <Title>{this.props.title}</Title>
//                         <View style={styles.radioValuesContainer}>
//                             {this.props.values.map(item => (
//                                 <View key={item.value} style={styles.radio}>
//                                     <View style={styles.radioButton}>
//                                         <RadioButton value={item.value} />
//                                     </View>
//                                     <Text>{item.label}</Text>
//                                 </View>
//                             ))}
//                         </View>
//                     </View>
//                 </RadioButton.Group>
// }
