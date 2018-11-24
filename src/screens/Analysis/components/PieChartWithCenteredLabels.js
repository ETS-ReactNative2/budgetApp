import React from 'react'
import { Dimensions, View } from 'react-native'
import { Text as PaperText } from 'react-native-paper'
import { PieChart } from 'react-native-svg-charts'
import { Text, TSpan, Svg } from 'react-native-svg'
import { getCategoryData } from '../utils/getCategoryData'

const { width } = Dimensions.get('window')

export class PieChartWithCenteredLabels extends React.PureComponent {
    render() {
        const data = getCategoryData(this.props.ledgerEntries)
        const Labels = ({ slices, height, width }) =>
            slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice
                return (
                    <Svg width="50" height="50">
                        <Text
                            alignmentBaseline="middle"
                            dx="5 5"
                            fill="white"
                            fontSize={20}
                            key={index}
                            stroke="black"
                            strokeWidth={0.3}
                            textAnchor="middle"
                            x={pieCentroid[0]}
                            y={pieCentroid[1] + index * 10}
                        >
                            <TSpan dx="10">{data.name}</TSpan>
                            <TSpan dx="10" dy="20">{`$${data.total}`}</TSpan>
                        </Text>
                    </Svg>
                )
            })

        return (
            <View
                style={{
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center',
                }}
            >
                <PieChart
                    style={{ flex: 3, padding: 20, width }}
                    valueAccessor={({ item }) => item.total}
                    data={data}
                    spacing={0}
                    outerRadius="95%"
                >
                    <Labels />
                </PieChart>
            </View>
        )
    }
}
