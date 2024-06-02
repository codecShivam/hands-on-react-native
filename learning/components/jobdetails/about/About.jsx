import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Hello, welcome to our app. Hope you are doing good :)
      </Text>
      <Text style={styles.description}>We provide your dream job!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#3498db", 
    color: "#2c3e50", 
    textShadowColor: "#34495e", 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default About;
