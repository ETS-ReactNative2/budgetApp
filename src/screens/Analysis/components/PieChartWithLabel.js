import React from 'react'
import { Dimensions, View } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line, Text, TSpan } from 'react-native-svg'
import { Text as PaperText } from 'react-native-paper'
import { getCategoryData } from '../utils/getCategoryData'

const { width } = Dimensions.get('window')

export class PieChartWithLabel extends React.PureComponent {
    render() {
        const pieData = getCategoryData(this.props.ledgerEntries)
        const Labels = ({ slices }) =>
            slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice
                return (
                    <G key={index}>
                        <Line
                            x1={labelCentroid[0]}
                            y1={labelCentroid[1]}
                            x2={pieCentroid[0]}
                            y2={pieCentroid[1]}
                            stroke={data.svg.fill}
                        />
                        <Circle
                            cx={labelCentroid[0]}
                            cy={labelCentroid[1]}
                            r={20}
                            fill={data.svg.fill}
                        />
                        <Text
                            alignmentBaseline="middle"
                            fill="white"
                            fontSize={12}
                            key={index}
                            stroke="white"
                            strokeWidth={0.1}
                            textAnchor="middle"
                            x={pieCentroid[0]}
                            y={pieCentroid[1]}
                        >
                            <TSpan x={labelCentroid[0]} y={labelCentroid[1] + 2}>
                                {data.value}
                            </TSpan>
                        </Text>
                        <Text
                            alignmentBaseline="middle"
                            fill={data.svg.fill}
                            fontSize={15}
                            key={index}
                            stroke="white"
                            strokeWidth={0.2}
                            textAnchor="middle"
                            x={pieCentroid[0]}
                            y={pieCentroid[1]}
                        >
                            <TSpan x={labelCentroid[0]} y={labelCentroid[1]} dy="30">
                                {data.name}
                            </TSpan>
                        </Text>
                    </G>
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
                    data={pieData}
                    innerRadius={55}
                    outerRadius={110}
                    labelRadius={150}
                >
                    <Labels />
                </PieChart>
            </View>
        )
    }
}
