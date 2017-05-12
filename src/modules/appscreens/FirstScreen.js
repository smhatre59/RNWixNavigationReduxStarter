import React, { PropTypes, Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';
import styles from './styles/FirstScreenStyles';
class FirstScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>First Screen Content</Text>
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

FirstScreen.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white'
};


export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
