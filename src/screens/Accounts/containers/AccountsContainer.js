import React from 'react'
import { connect } from 'react-redux'
import * as accountsActions from '../actions/accountsActions'
import * as accountsModalVisibilityActions from '../actions/accountsModalVisibilityActions'
import { Accounts } from '../components/Accounts'

// import { bindActionCreators } from 'redux'
// import AccountsCards from '../components/AccountsCards'
// import AddAccount from '../components/AddAccount'

// import store from '../../../store'

// class AccountsContainer extends React.Component {
//     handleCloseModal = () => {
//         Alert.alert(
//             'Back Button Pressed',
//             'Discard changes?',
//             [
//                 { text: 'Cancel', onPress: () => {}, style: 'cancel' },
//                 {
//                     text: 'OK',
//                     onPress: () => store.dispatch(accountsModalVisibilityActions.hideModal()),
//                 },
//             ],
//             { cancelable: false },
//         )
//     }

//     render() {
//         const { todos, filter, dispatch, accountsModalVisible } = this.props
//         return (
//             <View style={styles.container}>
//                 <NewEntryButton {...bindActionCreators(accountsModalVisibilityActions, dispatch)} />
//                 <EntryList
//                     activeFilter={filter}
//                     todos={todos}
//                     {...bindActionCreators(accountsActions, dispatch)}
//                 />
//                 {
//                     // <Filters
//                     //     activeFilter={filter}
//                     //     {...bindActionCreators(visibilityActions, dispatch)}
//                     // />
//                 }
//                 <Modal
//                     animationType="slide"
//                     transparent={false}
//                     visible={accountsModalVisible}
//                     onRequestClose={this.handleCloseModal}
//                 >
//                     <AddAccount
//                         {...bindActionCreators(accountsActions, dispatch)}
//                         {...bindActionCreators(accountsModalVisibilityActions, dispatch)}
//                     />
//                 </Modal>
//             </View>
//         )
//     }
// }

// /*
// <AddAccount
// style={styles.add}
// {...bindActionCreators(accountsActions, dispatch)} />
//  */

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     title: {},
//     list: {
//         flex: 1,
//     },
//     add: {
//         flex: 1,
//     },
// })

const mapStateToProps = state => ({
    accounts: state.accounts,
    accountsModalVisible: state.accountsModal.visible,
})

export default connect(
    mapStateToProps,
    null,
)(Accounts)
