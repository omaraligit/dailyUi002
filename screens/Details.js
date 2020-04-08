import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Destination from './components/Destination';
import Deal from './components/Deal';

export default class Details extends React.Component {
  deals = [
    {
      key: 1,
      price: 2300,
      date: 'Jun 06',
      airline: 'Cathay Pacific',
      rating: '4.8',
      discount: 40,
    },
    {
      key: 2,
      price: 2400,
      date: 'May 12',
      airline: 'Esy Jet',
      rating: '4.1',
      discount: 23,
    },
    {
      key: 3,
      price: 2600,
      date: 'Apr 22',
      airline: 'American Airlines',
      rating: '4.3',
      discount: 53,
    },
    {
      key: 4,
      price: 3300,
      date: 'Jun 31',
      airline: 'Cathay Pacific',
      rating: '4.8',
      discount: 23,
    },
    {
      key: 5,
      price: 4400,
      date: 'May 16',
      airline: 'Esy Jet',
      rating: '4.1',
      discount: 12,
    },
    {
      key: 6,
      price: 6600,
      date: 'Apr 21',
      airline: 'American Airlines',
      rating: '4.3',
      discount: 6,
    },
  ];
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topbarContainer}>
            <Icon name="chevron-left" size={30} color="#fff" />
            <Text style={styles.topbarContainerleftText}>Search Results</Text>
            <Icon name="cog" size={30} color="transparent" />
          </View>
        </View>
        {/* start -> destination -- card --*/}
        <View style={styles.card}>
          <View style={styles.carddests}>
            <Text style={styles.from}>Boston (BOS)</Text>
            <View style={styles.hr} />
            <Text style={styles.to}>New York City (JFK)</Text>
          </View>
          <View style={styles.cardaction}>
            <Icon
              name="exchange-alt"
              size={26}
              color="#444D61"
              style={{
                transform: [{rotate: '90deg'}],
              }}
            />
          </View>
        </View>
        <Text style={styles.bestDeals}>Best Deals for Next 6 Months</Text>
        <View>
          {this.deals.map((item,i) => (
            <Deal key={i} {...item} />
          ))}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFDFC',
    flex: 1,
  },
  header: {
    backgroundColor: '#F17324',
    paddingHorizontal: 16,
    paddingTop: 35,
    height: 160,
  },

  topbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topbarContainerleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topbarContainerleftIcon: {
    marginRight: 10,
  },
  topbarContainerleftText: {
    marginRight: 10,
    color: '#fff',
    fontSize: 22,
    fontFamily: 'CircularStd-Bold',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 10,
    marginHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 0,
    marginTop: -60,
  },
  carddests: {
    flex: 6,
  },
  from: {
    padding: 10,
    fontSize: 16,
    fontFamily: 'CircularStd-Book',
    paddingLeft: 0,
    opacity: 0.6,
  },
  hr: {backgroundColor: '#eee', height: 1},
  to: {
    padding: 10,
    fontSize: 18,
    fontFamily: 'CircularStd-Bold',
    paddingLeft: 0,
  },
  cardaction: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestDeals: {
    paddingHorizontal: 16,
    fontSize: 18,
    fontFamily: 'CircularStd-Book',
    marginVertical: 12,
  },
});
