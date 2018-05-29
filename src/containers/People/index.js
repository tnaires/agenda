import { connect } from 'react-redux';

import { addPerson } from '../../actions/person';
import PersonTable from '../../components/PersonTable';

const mapStateToProps = state => ({
  people: state.people
});

const mapDispatchToProps = dispatch => ({
  addPerson: name => dispatch(addPerson(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonTable);
