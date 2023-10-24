import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook for navigation

const NavLink = ({ text, routeName }) => {
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <View style={styles.link}>
        <Text style={styles.linkText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    alignItems: 'center', // Center the text horizontally
    marginVertical: 10, // Add margin for spacing
  },
  linkText: {
    color: 'blue',
  },
});

export default NavLink;
