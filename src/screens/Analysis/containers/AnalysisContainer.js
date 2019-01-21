import { connect } from 'react-redux'
import { Analysis } from '../components/Analysis'

const mapStateToProps = state => ({
    ledgerEntries: state.ledgerEntries,
    filter: state.filter,
})

export default connect(
    mapStateToProps,
    null,
)(Analysis)
