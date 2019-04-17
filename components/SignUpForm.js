import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL =
  "https://us-central1-one-time-password-86a43.cloudfunctions.net";

class SignUpForm extends Component {
  state = {
    phone: ""
  };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone
      });
    } catch (err) {
      this.setState({ error: "Something went wrong"})
    }
  };

  //   handleSubmit = () => {
  //     axios
  //       .post(`${ROOT_URL}/createUser`, {
  //         phone: this.state.phone
  //       })
  //       .then(() => {
  //         axios.post(`${ROOT_URL}/requestOneTimePassword`, {
  //           phone: this.state.phone
  //         });
  //       });
  //   };

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
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;
