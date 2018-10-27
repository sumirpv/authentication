import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './inner-section';
import firebase from 'firebase';
import {authInputChange, login } from '../actions/index.js';
import {connect} from 'react-redux';

class LoginForm extends Component {
    componentDidMount(){
        const config = {
            apiKey: "AIzaSyCt5JiNMXcKbIcZptXimtZABYg8pbT4pXM",
            authDomain: "authenticationform.firebaseapp.com",
            databaseURL: "https://authenticationform.firebaseio.com",
            projectId: "authenticationform",
            storageBucket: "authenticationform.appspot.com",
            messagingSenderId: "763634534109"
          };
          firebase.initializeApp(config);
    }

    login(){ 
        console.log("entered login function");
        const {email, password } = this.props;
        this.props.logon({email, password});
    }
    showButton(){
        if( this.props.loading){
            return (
                <View>
                    <ActivityIndicator size= {'small'}/>
                </View>
            )
        }else{
            <Button title ='Login' onPress= {this.login.bind(this)} backgroundColor ="teal" />
        }
    }
    showError(){
        if( this.props.error){
            return(
                <FormValidationMessage>
                { this.props.error}                </FormValidationMessage>
            )

        }
    }

  render() {
    return (
      <View style ={ styles.container}> 
          <InnerSection>
          <FormInput  placeholder="Email" 
          value= {this.props.email}
          onChangeText ={text => this.props.authInputchange({'field': 'email', 'value': text})}/>
          </InnerSection>
          <InnerSection>
          <FormInput  placeholder="password" 
          value = {this.props.password}
          onChangeText ={ text => this.props.authInputChange({'field' : 'password', 'value' : text})}
          secureTextEntry = {true}/>
          </InnerSection>
          <InnerSection>
              {this.props.showError}
          </InnerSection>
          <InnerSection>
              {this.props.showButton}
          </InnerSection>

      </View>
    );
  }
}

const mapStateToProps = state => {
    return{
        email : state.auth.email,
        password : state.auth.password,
        loading: state.auth.user,
        error : state.auth.error
    }
}; 



export default connect (mapStateToProps, { authInputChange, login })(LoginForm)

const styles ={
    container: {
        marginTop: 20,
    }
} 