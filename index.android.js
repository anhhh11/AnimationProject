/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AnimationProject extends Component {
  render() {
    console.log('hello');
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textInBox11}>
            Flex -
            Welcome to
          </Text>
          <Text style={styles.textInBox12}>
            React Native!
          </Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.textInBox21}>
            Flex -
            Haha!
          </Text>
          <Text style={styles.textInBox22}>
            Hoho!
          </Text>
          <Text style={styles.textInBox23}>
            Hehe!
          </Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.textInBox31}>
            Flex -
            Haha!
          </Text>
          <Text style={styles.textInBox32}>
            Hoho
          </Text>
        </View>
      </View>
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
    backgroundColor: "rgba(255,0,0,150)",
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
  box1: {
    padding: 10,
    backgroundColor: "rgba(255,0,0,150)",
    borderWidth: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  textInBox: {
    flex: 1,
    color: "green",
    lineHeight: 20,
    fontSize: 15,
  },
  textInBox11: {
    flex: 1,
    color: "white",
    fontSize: 15,
    textAlign: "right",
    lineHeight: 100,
    backgroundColor: "green",
    //alignSelf: auto | flex-start | flex-end | center | stretch
    alignSelf: "flex-end",  // vertical align if flexDirection column
    // horizontal align if flexDirection row
  },
  textInBox12: {
    flex: 1,
    color: "white",
    fontSize: 15,
    textAlign: "right",
    lineHeight: 150,
    backgroundColor: "blue",
    alignSelf: "center"
  },
  textInBox21: {
    backgroundColor: "grey",
    color: "green",
    lineHeight: 20,
    width: 40,
    fontSize: 15,
    alignSelf: "flex-start"
  },
  textInBox22: {
    backgroundColor: "black",
    color: "green",
    width: 60,
    lineHeight: 20,
    fontSize: 15,
    alignSelf: "stretch"
  },
  textInBox23: {
    backgroundColor: "black",
    color: "green",
    width: 60,
    lineHeight: 20,
    fontSize: 15,
    alignSelf: "flex-end"
  },
  box3: {
    padding: 10,
    flex: 1,
    borderWidth: 3
  },
  textInBox31: {
    position: "relative",
    left: 30,
  }
});

AppRegistry.registerComponent('AnimationProject', () => AnimationProject);
