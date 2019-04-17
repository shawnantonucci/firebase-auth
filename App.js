import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDLMS8-s5vGbN7noBkaJs-Zt8_AiXiONxs",
      authDomain: "one-time-password-86a43.firebaseapp.com",
      databaseURL: "https://one-time-password-86a43.firebaseio.com",
      projectId: "one-time-password-86a43",
      storageBucket: "one-time-password-86a43.appspot.com",
      messagingSenderId: "540453739503"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
