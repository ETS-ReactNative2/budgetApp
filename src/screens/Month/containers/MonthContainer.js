import React from 'react'
import { Alert, Modal, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as monthActions from '../actions/monthActions'
import MonthModal from '../components/MonthModal'
import store from '../../../store'
import EditMonthTargetButton from '../components/EditMonthTargetButton'
// import MonthlySpendingLineChart from '../components/MonthlySpendingLineChart'

const getDisplayAmount = number => {
    return parseFloat(Math.round(number * 100) / 100).toFixed(2)
}

class MonthContainer extends React.Component {
    handleCloseModal = () => {
        Alert.alert(
            'Back Button Pressed',
            'Discard changes?',
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                {
                    text: 'OK',
                    onPress: () => store.dispatch(monthActions.hideModal()),
                },
            ],
            { cancelable: false },
        )
    }

    render() {
        const { dispatch, monthModalVisible, month } = this.props
        return (
            <View style={styles.container}>
                {/* <View style={styles.chart}>
                    <MonthlySpendingLineChart
                        ledgerEntries={ledgerEntries}
                        previousAmount={previousAmount}
                    />
                </View> */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Current spending target:</Text>
                    <Text style={styles.cardAmount}>
                        {`$${month && getDisplayAmount(month.monthTarget)}`}
                    </Text>
                    <Text style={styles.cardTitle}>Amount remaining:</Text>
                    <Text style={styles.cardAmount}>
                        {`$${month && getDisplayAmount(month.monthCurrent)}`}
                    </Text>
                </View>

                <EditMonthTargetButton {...bindActionCreators(monthActions, dispatch)} />

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={monthModalVisible}
                    onRequestClose={this.handleCloseModal}
                >
                    <MonthModal
                        monthCurrent={month && month.monthCurrent}
                        monthTarget={month && month.monthTarget}
                        {...bindActionCreators(monthActions, dispatch)}
                    />
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 30,
        alignSelf: 'center',
        width: 300,
    },
    cardAmount: {
        fontSize: 48,
        marginHorizontal: 8,
    },
    cardTitle: {
        color: 'rgb(126, 89, 191)',
        fontSize: 16,
        margin: 8,
        marginBottom: 0,
    },
    chart: {
        margin: 15,
        backgroundColor: 'white',
        elevation: 2,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
})

const mapStateToProps = state => ({
    ledgerEntries: state.ledgerEntries,
    monthModalVisible: state.monthModal.visible,
    month: state.month,
})

export default connect(
    mapStateToProps,
    null,
)(MonthContainer)
