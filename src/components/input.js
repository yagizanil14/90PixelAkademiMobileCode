import React, { Component } from 'react'
import {View, StyleSheet, TextInput } from 'react-native'

export default class input extends Component {
    state ={ 
        text: ""
    };
    render() {
        return (
            <View>
            <TextInput
           style={styles.ınptstyl}
           {...this.props}
           value = {this.state.text} 
           onChangeText = {text => this.setState({text})}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    ınptstyl: {
        backgroundColor: "#f2f2f2",
        borderColor: "#f2f2f2",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 7,
        marginHorizontal: 20,
        fontSize: 18,
        paddingHorizontal: 15,
        shadowColor: "black",
        shadowOpacity: .2,
        shadowRadius: 3,
        shadowOffset: {
          width: 2,
          height: 2,
        },
        elevation: 10,
      },
})
