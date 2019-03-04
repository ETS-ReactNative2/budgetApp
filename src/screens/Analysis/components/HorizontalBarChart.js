import React from 'react'
import { FlatList } from 'react-native'
import { BarChartBar } from './BarChartBar'

export class HorizontaBarChart extends React.PureComponent {
    keyExtractor = item => item.name

    renderItem = ({ item }) => (
        <BarChartBar
            id={item.id}
            key={item.id}
            value={item.displayValue}
            name={item.name}
            color={item.svg.fill}
            width={item.barWidth}
        />
    )

    render() {
        const { data } = this.props
        return (
            <FlatList data={data} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
        )
    }
}
