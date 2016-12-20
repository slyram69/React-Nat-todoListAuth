import React from 'react';
import {connect} from 'react-redux';
import {
 StyleSheet,
 Text,
 View,
} from 'react-native';

//imort {} from '../actions';

import Login from './Login';
import Main from './Main';
import AlertContainer from './alerts/AlertContainer';

var App = React.createClass({
  gitInitialState() {
    return {}
  },
  render() {
    var renderMainView = () => {
      if (this.props.user_id) {
        return(
          <Main />
        );
      } else {
        return(
          <Login />
        );
      }
    }
    return (
      <View style={{flex: 1}}>
        <AlertContainer/>
        {renderMainView()}
      </View>
    )
    return (
      <View style={{flex: 1}}>
        {renderMainView()}
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ccc'
  },
});

  var mapStateToProps = (state) => {
    return {
      user_id: state.auth.user_id
    }
  }

module.exports = connect(mapStateToProps)(App);
