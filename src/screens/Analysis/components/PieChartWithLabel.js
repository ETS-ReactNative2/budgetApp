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
        // const randomColor = () =>
        //     `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(0, 7)

        // const pieData =
        //     .filter(value => value > 0)
        //     .map((value, index) => ({
        //         value,
        //         svg: { fill: '#22ee55' },
        //         key: `pie-${index}`,
        //     }))

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
                            r={15}
                            fill={data.svg.fill}
                        />
                        <Text
                            alignmentBaseline="middle"
                            fill="black"
                            fontSize={20}
                            key={index}
                            stroke="black"
                            strokeWidth={0.1}
                            textAnchor="middle"
                            x={pieCentroid[0]}
                            y={pieCentroid[1]}
                        >
                            <TSpan x={labelCentroid[0]} y={labelCentroid[1]}>
                                {data.name}
                            </TSpan>
                            <TSpan x={labelCentroid[0]} y={labelCentroid[1]} dy="20">{`$${
                                data.value
                            }`}</TSpan>
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
                    innerRadius={50}
                    outerRadius={90}
                    labelRadius={130}
                >
                    <Labels />
                </PieChart>
            </View>
        )
    }
}
