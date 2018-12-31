import React from 'react'
import { Alert, Modal, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as accountsActions from '../actions/accountsActions'
import { AccountsList } from '../components/AccountsList'

import AccountsModal from '../components/AccountsModal'

import store from '../../../store'

class AccountsContainer extends React.Component {
    handleCloseModal = () => {
        Alert.alert(
            'Back Button Pressed',
            'Discard changes?',
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                {
                    text: 'OK',
                    onPress: () => store.dispatch(accountsActions.hideModal()),
                },
            ],
            { cancelable: false },
        )
    }

    render() {
        const { dispatch, accountsModalVisible } = this.props
        return (
            <View style={styles.container}>
                <AccountsList {...bindActionCreators(accountsActions, dispatch)} />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={accountsModalVisible}
                    onRequestClose={this.handleCloseModal}
                >
                    <AccountsModal {...bindActionCreators(accountsActions, dispatch)} />
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
    accounts: state.accounts,
    accountsModalVisible: state.accountsModal.visible,
})

export default connect(
    mapStateToProps,
    null,
)(AccountsContainer)
