/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  TouchableWithoutFeedback


} from 'react-native';

const Dimensions = require('Dimensions');

var {
  width,
  height
} = Dimensions.get('window');
height /= 3;
const SQUARE_DIMENSIONS = 60;

// tension: force
var SPRING_CONFIG = {tension: 1000, friction: 20}; //Soft spring
export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.box1 = new Animated.ValueXY();
    this.state.box21 = new Animated.Value(0);
    this.state.box22 = new Animated.Value(0);
    this.state.box31 = new Animated.Value(0);
    this.state.box32 = new Animated.Value(0);
  }

  getStyle() {
    return {
      transform: this.state.box1.getTranslateTransform()
    }
  }


  componentDidMount() {

  }

  onPress(e) {
    console.log(e.nativeEvent);
    const {locationX, locationY} = e.nativeEvent;
    var box1Animation = Animated.sequence([
      Animated.spring(this.state.box1, {
        ...SPRING_CONFIG,
        toValue: {x: 0, y: 0}
      }),
      Animated.spring(this.state.box1, {
        ...SPRING_CONFIG,
        toValue: {x: width / 2, y: 0}
      }),
      Animated.spring(this.state.box1, {
        ...SPRING_CONFIG,
        toValue: {x: width / 2, y: height / 2}
      }),
      Animated.spring(this.state.box1, {
        ...SPRING_CONFIG,
        toValue: {x: 0, y: height / 2}
      }),
      Animated.spring(this.state.box1, {
        ...SPRING_CONFIG,
        toValue: {x: 0, y: 0}
      }),
      Animated.decay(this.state.box1, {
        velocity: {x: 0.2, y: 0.2}, // velocity from gesture release
        deceleration: 0.997,
      }),
    ]);
    var box2Animation = Animated.parallel([
      Animated.timing(this.state.box21, {
        duration: 2000,
        toValue: 200,
        easing: Easing.linear,

      }),
      Animated.timing(this.state.box22, {
        duration: 2000,
        toValue: 200,
        easing: Easing.linear,

      }),
    ]);
    this.refs.box3.measure((ox, oy, width, height, px, py) => {
      // alert(`${width} - ${height}`);
      var box3Animation = Animated.parallel([
        Animated.timing(this.state.box31, {
          duration: 2000,
          toValue: width - SQUARE_DIMENSIONS,
          easing: Easing.linear,

        }),
        Animated.timing(this.state.box32, {
          duration: 2000,
          toValue: height - SQUARE_DIMENSIONS,
          easing: Easing.linear,
        }),
      ]);
      Animated.parallel([box1Animation, box2Animation, box3Animation]).start();
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Animated.Text style={[styles.textInBox,this.getStyle()]}>
              @@@
            </Animated.Text>
          </View>
          <View style={styles.box2}>
            <Animated.Text
              style={[styles.textInBox2,{transform: [
                {translateX: this.state.box21},
                {translateY: this.state.box22}]}]
              }>
              @@@
            </Animated.Text>
          </View>
          <View style={styles.box3} ref="box3">
            <Animated.Text
              style={[styles.textInBox3,{transform: [
                {translateX: this.state.box31},
                {translateY: this.state.box32}]}]
              }>
              @@@
            </Animated.Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "column",
    flex: 1
  },
  box: {
    padding: 10,
    backgroundColor: "rgba(0,255,0,0.5)",
    borderWidth: 2,
    flexDirection: "row",
    //alignItems: flex-start | flex-end | center | stretch
    alignItems: "center",     // vertical align if flexDirection column
                              // horizontal align if flexDirection row
    // by flexDirection
    // justifyContent: flex-start | flex-end | center | space-between | space-round
    justifyContent: 'flex-start',
    flex: 1

  },
  textInBox: {
    backgroundColor: "rgba(123,123,123,0.5)",
    padding: 10,
    position: "absolute",
    color: "green",
    lineHeight: 20,
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    fontSize: 15
  },
  box2: {
    padding: 10,
    backgroundColor: "rgba(0,255,0,0.5)",
    borderWidth: 2,
    flexDirection: "row",
    //alignItems: flex-start | flex-end | center | stretch
    alignItems: "center",     // vertical align if flexDirection column
                              // horizontal align if flexDirection row
    // by flexDirection
    // justifyContent: flex-start | flex-end | center | space-between | space-round
    justifyContent: 'flex-start',
    flex: 1

  },
  textInBox2: {
    backgroundColor: "rgba(123,123,123,0.5)",
    padding: 10,
    position: "absolute",
    color: "green",
    lineHeight: 20,
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    fontSize: 15
  },
  box3: {
    padding: 10,
    backgroundColor: "rgba(0,255,0,0.5)",
    borderWidth: 2,
    flexDirection: "row",
    //alignItems: flex-start | flex-end | center | stretch
    alignItems: "center",     // vertical align if flexDirection column
                              // horizontal align if flexDirection row
    // by flexDirection
    // justifyContent: flex-start | flex-end | center | space-between | space-round
    justifyContent: 'flex-start',
    flex: 1

  },
  textInBox3: {
    backgroundColor: "rgba(123,123,123,0.5)",
    padding: 10,
    position: "absolute",
    color: "green",
    lineHeight: 20,
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    fontSize: 15
  }
});

