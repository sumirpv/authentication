import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import LoginForm from '../src/components/login-form';
import Header from '../src/components/header'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../src/reducers';
import ReduxThunk from 'redux-thunk';

export default class HomeScreen extends React.Component {


  render() {
    const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));
    return (
      <Provider store ={store}>
      <View style={styles.container}>
      <Header text='Login Form'/>
        <LoginForm/>
      </View>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    // flex: 1,
    //  backgroundColor: '#fff',
    // alignItems:'center',
    // justifyContent: 'center',
  }
});
