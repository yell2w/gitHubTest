import React, { Component } from 'react';
import { TextInput } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('This is your own Text Input');

  return (

    <KeyboardAvoidingView behavior="padding" enabled>
      <TextInput
        style={{height: 40, borderColor: 'gray',borderWidth:1}}
        onChangeText={text => onChangeText({text}) }
        value={value}
      />
    </KeyboardAvoidingView>
   );
}