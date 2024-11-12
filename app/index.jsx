import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Categories from '../Components/Categories'
import Colors from '../constants/Colors'
import Restaurants from '../Components/Restaurants'

const index = () => {
  return (
    <View>
      <ScrollView>
          <Categories />
          <Text style={styles.header}>Top picks in your neighbourhood</Text>
          <Restaurants />
          <Text style={styles.header}>Offers near you</Text>
          <Restaurants />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});


export default index