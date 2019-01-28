import React from 'react'
import { Alert, Modal, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as monthActions from '../actions/monthActions'
// import { AccountsList } from '../components/AccountsList'
import MonthModal from '../components/MonthModal'
import store from '../../../store'

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
        const { dispatch, ledgerEntries, monthModalVisible, previousAmount } = this.props
        return (
            <View style={styles.container}>
                <Text>YOYO{ledgerEntries[0].description}</Text>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={monthModalVisible}
                    onRequestClose={this.handleCloseModal}
                >
                    <MonthModal
                        previousAmount={previousAmount}
                        {...bindActionCreators(monthActions, dispatch)}
                    />
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

const mapStateToProps = state => ({
    ledgerEntries: state.ledgerEntries,
    monthModalVisible: state.accountsModal.visible,
    previousAmount: state.accountsModal.previousAmount,
})

export default connect(
    mapStateToProps,
    null,
)(MonthContainer)
