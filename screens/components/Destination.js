import React from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';

export default class Destination extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={{uri: this.props.img}}
          style={styles.container}>
          <View style={styles.btmCardData}>
            <View style={styles.sectionLine}>
              <Text style={[styles.sectionLineTextleft, styles.bold]}>
                {this.props.name}
              </Text>
            </View>
            <View style={styles.sectionLine}>
              <Text style={[styles.sectionLineTextleft, {opacity: 0.7}]}>
                {this.props.date}
              </Text>
              <Text style={[styles.sectionLineTextright, styles.pin]}>
                {this.props.discount} %
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={[
            styles.sectionLine,
            {justifyContent: null, marginTop: 8, paddingHorizontal: 30},
          ]}>
          <Text
            style={[styles.sectionLineTextleft, {color: '#000', fontSize: 18}]}>
            ${this.props.price}
          </Text>
          <Text style={[styles.sectionLineTextleft, styles.oldPrice]}>
            ($
            {this.props.price + (this.props.price * this.props.discount) / 100})
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: 190,
    height: 240,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 20,
  },
  sectionLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sectionLineTextleft: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'CircularStd-Book',
  },
  sectionLineTextright: {
    fontSize: 16,
    color: '#F17324',
    fontFamily: 'CircularStd-Book',
  },
  bold: {
    fontFamily: 'CircularStd-Bold',
  },
  pin: {
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 14,
    borderRadius: 30,
  },
  btmCardData: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
  },
  oldPrice: {
    color: '#8D929E',
    marginLeft: 8,
    fontSize: 18,
    textDecorationLine: 'line-through',
    opacity: 0.8,
  },
});
