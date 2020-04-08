import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Deal extends React.Component {
  render() {
    return (
      <View style={styles.dealCard}>
        <Text style={[styles.sectionLineTextright, styles.pin]}>
          {this.props.discount} %
        </Text>
        <View style={styles.sectionLine}>
          <Text style={[styles.sectionLineTextleft]}>${this.props.price}</Text>
          <Text style={[styles.sectionLineTextleft, styles.oldPrice]}>
            ({this.props.price + (this.props.price * this.props.discount) / 100}
            )
          </Text>
        </View>
        <View style={styles.sectionLine}>
          <View style={[styles.sectionLine, styles.botz]}>
            <Icon
              name="plane"
              size={14}
              color="#000"
              style={{marginRight: 8}}
            />
            <Text style={styles.dotzText}>{this.props.date}</Text>
          </View>
          <View style={[styles.sectionLine, styles.botz]}>
            <Icon
              name="plane"
              size={14}
              color="#000"
              style={{marginRight: 8}}
            />
            <Text style={styles.dotzText}>{this.props.airline}</Text>
          </View>
          <View style={[styles.sectionLine, styles.botz]}>
            <Icon
              name="plane"
              size={14}
              color="#000"
              style={{marginRight: 8}}
            />
            <Text style={styles.dotzText}>{this.props.rating}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dealCard: {
    borderRadius: 10,
    borderColor: '#E1E2E6',
    borderWidth: 1,
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 16,
  },
  sectionLineTextright: {
    fontSize: 18,
    color: '#F17324',
    fontFamily: 'CircularStd-Book',
  },
  pin: {
    position: 'absolute',
    top: 20,
    right:-10,
    color: '#F17324',
    backgroundColor: '#FFF0E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 14,
    borderRadius: 30,
  },
  sectionLine: {flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'},
  sectionLineTextleft: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'CircularStd-Bold',
  },

  oldPrice: {
    color: '#8D929E',
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'CircularStd-Meduim',
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  botz: {
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 10,
    marginRight: 8,
  },
  dotzText: {
    fontFamily: 'CircularStd-Meduim',
    opacity: 0.8,
  },
});
