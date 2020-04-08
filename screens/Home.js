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

export default class Home extends React.Component {
  destinations = [
    {
      key: '1',
      name: 'Las Vegas',
      price: 3480,
      discount: 50,
      date: 'Apr 2020',
      img:
        'https://images.unsplash.com/photo-1543321269-9d86d3680e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=50',
    },
    {
      key: '2',
      name: 'Mew York',
      price: 2400,
      discount: 40,
      date: 'Feb 2020',
      img:
        'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=50',
    },
    {
      key: '3',
      name: 'Athens',
      price: 3700,
      discount: 30,
      date: 'Mar 2020',
      img:
        'https://images.unsplash.com/photo-1583635658408-1f93b11d7941?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=50',
    },
    {
      key: '4',
      name: 'Canada',
      price: 1200,
      discount: 20,
      date: 'Sep 2020',
      img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=50'
    },
    {
      key: '5',
      name: 'Florida',
      price: 2250,
      discount: 10,
      date: 'Jul 2020',
      img:
        'https://images.unsplash.com/photo-1530071291164-537d481750f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=50',
    },
  ];
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topbarContainer}>
            <View style={styles.topbarContainerleft}>
              <Icon
                name="map-marker-alt"
                size={22}
                style={styles.topbarContainerleftIcon}
                color="#fff"
              />
              <Text style={styles.topbarContainerleftText}>Boston (BOS)</Text>
              <Icon
                name="sort-down"
                size={25}
                style={[styles.topbarContainerleftIcon, {paddingBottom: 10}]}
                color="#fff"
              />
            </View>
            <Icon name="cog" size={30} color="#fff" />
          </View>
          <Text style={styles.callToActionText}>
            Here would you want to go?
          </Text>
          <View style={styles.searchConatiner}>
            <TextInput
              style={styles.searchInput}
              placeholder="New York City (JFK)"
              pla
            />
            <TouchableHighlight style={styles.searchButton}>
              <Icon
                name="search"
                size={20}
                style={styles.searchIcon}
                color="#8D929E"
              />
            </TouchableHighlight>
          </View>
          {/* switcher here */}
          <View style={styles.switchContainer}>
            <View style={[styles.switchItem, {backgroundColor: '#F28E51'}]}>
              <Icon
                name="plane"
                size={18}
                style={styles.switchIcon}
                color="#fff"
              />
              <Text style={styles.switchText}>Flights</Text>
            </View>
            <View style={styles.switchItem}>
              <Icon
                name="bed"
                size={18}
                style={styles.switchIcon}
                color="#fff"
              />
              <Text style={styles.switchText}>Hotails</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionLine}>
          <Text style={styles.sectionLineTextleft}>
            Currently Watched Items
          </Text>
          <Text style={styles.sectionLineTextright}>View All (12)</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={this.destinations}
            renderItem={({item}) => <Destination {...item} />}
          />
        </View>
        <View style={styles.sectionLine}>
          <Text style={styles.sectionLineTextleft}>
            Top destination for 2019
          </Text>
          <Text style={styles.sectionLineTextright}>View All (22)</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={this.destinations}
            renderItem={({item}) => <Destination {...item} />}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFC',
  },
  header: {
    backgroundColor: '#F17324',
    paddingHorizontal: 16,
    paddingTop: 35,
    height: 360,
  },
  imageShape: {
    width: '100%',
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
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
    fontSize: 18,
    fontFamily: 'CircularStd-Book',
  },
  callToActionText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'CircularStd-Bold',
    textAlign: 'center',
    paddingHorizontal: 100,
    lineHeight: 40,
    letterSpacing: 0,
    paddingVertical: 38,
  },
  searchConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'space-between',
    borderRadius: 50,
    marginHorizontal: 50,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.52,
    shadowRadius: 16.0,
    elevation: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    fontFamily: 'CircularStd-Bold',
    flex: 1,
    paddingLeft: 30,
    fontSize: 18,
    color: '#444D61',
  },
  searchButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  searchIcon: {},
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  switchItem: {
    width: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  switchIcon: {},
  switchText: {
    fontSize: 14,
    color: '#fff',
    paddingLeft: 10,
    fontFamily: 'CircularStd-Medium',
  },
  sectionLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  sectionLineTextleft: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'CircularStd-Book',
  },
  sectionLineTextright: {
    fontSize: 16,
    color: '#F17324',
    fontFamily: 'CircularStd-Book',
  },
});
