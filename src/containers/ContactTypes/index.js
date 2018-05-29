import { connect } from 'react-redux';

import { addContactType } from '../../actions/contactType';
import ContactTypeTable from '../../components/ContactTypeTable';

const mapStateToProps = state => ({
  contactTypes: state.contactTypes
});

const mapDispatchToProps = dispatch => ({
  addContactType: description => dispatch(addContactType(description))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactTypeTable);
