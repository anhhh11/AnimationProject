import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'


export const InfoView = React.createClass({
  render(){
    const {routes} = this.props;
    return <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={Actions.main}>
          <Text style={styles.text}>{routes.getIn(['scene', 'title'])}</Text>
        </TouchableOpacity>
      </View>
    </View>
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    flex: 1,
    backgroundColor: "rgba(123,123,123,0.5)",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    shadowColor: "black",
    shadowOffset: {width: 30, height: 30},
    shadowOpacity: 1,
    shadowRadius: 10
  },
  text: {
    backgroundColor: "rgba(255,123,123,0.5)",
    padding: 10,
    width: 100,
    height: 40,
    textAlign: "center",
    lineHeight: 40,
    elevation: 6
  }
});
const mapStateToProps = function (state) {
  return {
    routes: state.get('routes')
  };
};
export default connect(mapStateToProps)(InfoView);
