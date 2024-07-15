import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function InputDisplayScreen() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleDisplayText = () => {
    setDisplayText(inputText);
    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.displayText}>{displayText}</Text>
      </View>
      <View style={{ marginBottom: 16 }}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={handleInputChange}
          placeholder="Type something..."
        />
        <Button title="Enter" onPress={handleDisplayText} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  displayText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
