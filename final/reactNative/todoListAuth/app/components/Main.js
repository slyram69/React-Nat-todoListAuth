import React from 'react';
import {connect} from 'react-redux';
import {
 StyleSheet,
 Text,
 View,
 TouchableOpacity
 } from 'react-native';

 import {unauthUser} from '../actions';

 var Main = React.createClass({
   onLogout: function() {
     this.props.dispatch(unauthUser);
   },
  render() {
    return (
      <View style={styles.Container}>
        <Text>
          Welcome to Main!
        </Text>
        <TouchableOpacity onPress={this.onLogout}>
        <Text>
          Logout
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = connect()(Main);
