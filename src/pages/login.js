import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Input from "../components/input";
import Registerr from "./register";
import Translate from "./translate";

export default class login extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image
            resizeMode={"center"}
            style = {styles.imglogo}
             source={{uri:"https://pngimage.net/wp-content/uploads/2018/05/background-logo-png-5.png"}}
            ></Image>
            <View style={styles.titlewiew}>
              <Text style={styles.titlestyle}>ABC Translate</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.titlestyle}>Giriş Yapın</Text>
              <ScrollView>
              <Input
               keyboardType = "email-address"
               placeholder = "email adresinizi giriniz"/>
               <Input
               secureTextEntry ={true}
               placeholder = "şifrenizi giriniz"/>
               <View style={styles.rw}>
               <TouchableOpacity
               
                style={styles.ztnkaydl} >
                <Text style ={styles.btnkaydol}>Kayıt Ol</Text>
               </TouchableOpacity>
               <TouchableOpacity >
                <Image
                 style = {styles.imgicon}
                  source ={{uri:"https://cdn4.iconfinder.com/data/icons/variety-of-arrows/32/arrows-22-512.png"}}
                 />
               </TouchableOpacity>
               </View>
               
               </ScrollView>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      height: "100%",
      backgroundColor: '#f2f2f2',
    },
    container2: {
      paddingVertical: 15,
      width: "90%",
      height: "44%",
      backgroundColor: "#DEDDDB",
      borderRadius: 15,
      shadowColor: "black",
      shadowOpacity: .2,
      shadowRadius: 3,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      elevation: 10,
    },
    imglogo: {
      marginTop: 50,
      width: "20%",
      height: "15%",
    },
    titlestyle: {
      textAlign: "center",
      fontSize: 24,
      fontFamily: "bold",
      paddingBottom: 15,
    },
   
    btnkaydol: {
      textAlign: "left",
      fontSize: 17,
      marginTop: 10,
    },
    rw: {
        justifyContent: "space-between",
        marginHorizontal: 25,
        flexDirection: "row"
    },
    imgicon: {
        marginVertical:10,
        marginRight: 10,
        width: 50,
        height: 50
    },
    ztnkaydl: {
        marginTop: 20
    }
    
  });
