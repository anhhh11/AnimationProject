/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import K from 'kefir'
import {
  AppRegistry,
  Platform,
  UIManager,
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  PanResponder,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutAnimation


} from 'react-native';
import {HoldablePoint} from '../libs/event-utils'
var update = require('react-addons-update');


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
var SPRING_CONFIG = {tension: 10, friction: 2}; //Soft spring
class AnimationProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxW: 100,
      boxH: 50,
      boxStyles: {}
    };
    this.state.boxPos = new Animated.ValueXY({x: 0, y: 0});
    this._value = {x: 0, y: 0};
    this.state.boxPos.addListener((value) => {
      this._value = value;
      console.log('value', value);
    });
    // this.picked = false;
    const hdPoint = new HoldablePoint();
    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        //   // The guesture has started. Show visual feedback so the user knows
        //   // what is happening!
        //   console.log('grant', evt, JSON.stringify(gestureState));
        hdPoint.hold(500).then(() => {
          this.state.boxPos.setOffset({x: this._value.x, y: this._value.y});
          this.state.boxPos.setValue({x: 0, y: 0});
          this.setState(update(this.state, {
            boxStyles: {
              backgroundColor: {$set: "red"},
              shadowColor: {$set: "black"},
              shadowRadius: {$set: 30},
              shadowOffset: {$set: {width: 20, height: 20}},
              shadowOpacity: {$set: 1}
            }
          }));
        });
        //   // gestureState.{x,y}0 will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        //   // The most recent move distance is gestureState.move{X,Y}
        //   // console.log('move', evt, JSON.stringify(gestureState));
        //   // The accumulated gesture distance since becoming responder is
        //   // gestureState.d{x,y}
        hdPoint.isHeld().then(() => {
          console.log({x: gestureState.dx, y: gestureState.dy});
          this.state.boxPos.setValue({x: gestureState.dx, y: gestureState.dy});
        });
        //   // Animated.timing(this.state.boxPos, {
        //   //   ...SPRING_CONFIG,
        //   //   toValue: {x: gestureState.dx, y: gestureState.dy}
        //   // }).start();
      },
      // onPanResponderMove: Animated.event([null, {
      //   dx: this.state.boxPos.x, // x,y are Animated.Value
      //   dy: this.state.boxPos.y,
      // }]),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        // console.log('release', this.state.boxPos);
        // this.state.boxPos.flattenOffset();
        // Animated.spring(this.state.boxPos, {
        //   ...SPRING_CONFIG,
        //   toValue: {x: 0, y: 0}
        // }).start();
        // var a = Animated.spring(
        //   this.state.boxPos,         // Auto-multiplexed
        //   {toValue: {x: 0, y: 0}} // Back to zero
        // );
        // a.start();
        // this.state.boxPos.setValue({x: 0, y: 0});
        // console.log('HERE0');
        // const val = this.state.boxPos;
        // this.state.boxPos.setOffset({x: this._value.x, y: this._value.y});
        // Animated.spring(this.state.boxPos, {
        //   toValue: {x: gestureState.dx, y: gestureState.dy},
        //   friction: 1
        // }).start(function () {
        //   // alert('here');
        // }.bind(this));
        hdPoint.isHeld().then(() => {
          this.setState(update(this.state, {
            boxStyles: {
              backgroundColor: {$set: "blue"}
            }
          }));
          this.state.boxPos.flattenOffset();
          hdPoint.release();
        });
        // point.release()
        // console.log('HERE1', this.state.boxPos);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  getStyle() {
    return this.state.boxPos.getLayout();
  }

  componentWillMount() {
    // LayoutAnimation.easeInEaseOut();
    // console.log(this._panResponder);
  }

  componentDidMount() {
    // Animated.spring(this.state.boxPos,{
    //   ...SPRING_CONFIG,
    //   toValue: {x: -200, y: -200}
    // }).start();
  }

  onPress() {
    // LayoutAnimation.easeInEaseOut();
    // this.setState({boxW: this.state.boxW + 15, boxH: this.state.boxH + 15});
  }


  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View style={[styles.box]}>
            {/*<TouchableOpacity onPress={this.onPress.bind(this)}>*/}
            {/*<Text>Reset</Text>*/}
            {/*</TouchableOpacity>*/}
            <Animated.View
              style={[this.state.boxPos.getLayout(), this.state.boxStyles]} {...this.state.panResponder.panHandlers}>
              <Text style={[styles.text, {width: this.state.boxW, height: this.state.boxH}]}>
                ^(O-O)^
              </Text>
            </Animated.View>
          </View>
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

AppRegistry.registerComponent('AnimationProject', () => AnimationProject);
