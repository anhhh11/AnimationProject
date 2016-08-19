/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Platform,
  UIManager,
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  TouchableWithoutFeedback,
  LayoutAnimation


} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const Dimensions = require('Dimensions');

var {
  width,
  height
} = Dimensions.get('window');
height /= 3;
const SQUARE_DIMENSIONS = 60;

// tension: force
var SPRING_CONFIG = {tension: 1000, friction: 20}; //Soft spring
class AnimationProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxW: 100,
      boxH: 50
    };
    this.state.box1 = new Animated.ValueXY();
  }

  getStyle() {
    return {
      transform: this.state.box1.getTranslateTransform()
    }
  }

  componentWillMount() {
    LayoutAnimation.easeInEaseOut();
  }

  componentDidMount() {

  }

  onPress() {
    LayoutAnimation.easeInEaseOut();
    // this.setState({boxW: this.state.boxW + 15, boxH: this.state.boxH + 15});
  }


  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
            <View style={styles.box}>
              <Text style={[styles.text,{width: this.state.boxW, height: this.state.boxH}]}>
                123456789
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

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
    justifyContent: "center"
  },
  text: {
    backgroundColor: "rgba(255,123,123,0.5)",
    padding: 10,
    width: 100,
    height: 40,
    lineHeight: 40
  }
});

AppRegistry.registerComponent('AnimationProject', () => AnimationProject);
