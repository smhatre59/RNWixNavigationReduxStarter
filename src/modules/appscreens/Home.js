import React, { PropTypes, Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';

class Home extends Component {
    render() {
        return(
            <View>
                <Text>Home Page Content added here</Text>
            </View>
        )
    }
}

function mapStateToProps(state, ownProps) {
	return {
        courseData:state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(homeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
