import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

interface FormData {
  image: string;
  location: string;
  longitude: number;
  latitude: number;
  surfBreak: string;
  difficultyLevel: number;
}

interface FormSpotProps {}

interface FormSpotState {
  formData: FormData;
}

class FormSpot extends Component<FormSpotProps, FormSpotState> {
  constructor(props: FormSpotProps) {
    super(props);
    this.state = {
      formData: {
        image: '',
        location: '',
        longitude: 0,
        latitude: 0,
        surfBreak: '',
        difficultyLevel: 0
      },
    };
  }

  handleInputChange = (field: keyof FormData, value: string | number) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [field]: value,
      },
    }));
  };

  handleSubmit = () => {
    const { formData } = this.state;
    console.log(formData);
  };

  render() {
    const { formData } = this.state;

    return (
      <View>
        <TextInput
          placeholder="Image"
          value={formData.image}
          onChangeText={(text) => this.handleInputChange('image', text)}
        />
        <TextInput
          placeholder="location"
          value={formData.location}
          onChangeText={(text) => this.handleInputChange('location', text)}
        />
         <TextInput
          placeholder="longitude"
          value={formData.longitude.toString()}
          onChangeText={(text) => this.handleInputChange('longitude', parseInt(text))}
        />
         <TextInput
          placeholder="latitude"
          value={formData.latitude.toString()}
          onChangeText={(text) => this.handleInputChange('latitude', parseInt(text))}
        />
         <TextInput
          placeholder="surfBreak"
          value={formData.surfBreak}
          onChangeText={(text) => this.handleInputChange('surfBreak', text)}
        />
         <TextInput
          placeholder="difficultyLevel"
          value={formData.difficultyLevel.toString()}
          onChangeText={(text) => this.handleInputChange('difficultyLevel', parseInt(text))}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default FormSpot;