import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {post_input} from './styles';

export const PostInput = (props) => {
  const [postText, setPostText] = React.useState('');

  return (
    <View style={post_input.container}>
      <View style={post_input.inputContainer}>
        <TextInput
          value = {postText}
          multiline
          placeholder="Type something.."
          onChangeText={(value) => setPostText(value)}
        />
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => {
          props.onSendPost(postText)
          setPostText("")
          
        }}
      >
        <Icon name="telegram" size={30} color="#666ad1" />
      </TouchableOpacity>
    </View>
  );
};
