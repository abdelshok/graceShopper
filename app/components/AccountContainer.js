import AccountComponent from './AccountComponent'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		user: state.account.user,
    	productLines: state.account.productLines
	}
}

export default connect(mapStateToProps)(AccountComponent)



