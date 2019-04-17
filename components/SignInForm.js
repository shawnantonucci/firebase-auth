import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import firebase from 'firebase';

const ROOT_URL =
  "https://us-central1-one-time-password-86a43.cloudfunctions.net";

class SignInForm extends Component {
  state = {
    phone: "",
    code: ""
  };

handleSubmit = async () => {
    try {
        let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
            phone: this.state.phone, code: this.state.code
        })
        firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
        console.log(err);
    }
}

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <Input
            label="Please Enter your phone number"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <Input
            label="Please Enter your code"
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;
