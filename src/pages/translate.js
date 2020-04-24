import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

const App = () => {

    const [inputText, setText] = useState('');
    const [responseText, setResponse] = useState('');
  
    function postTranslateService(text) {
      fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190908T175021Z.23e59e5c7eeb7d41.400650556577aaaab85fd3c893c34e4cf200de9a&lang=tr-en&text=' + text)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.text)
          setResponse(res.text)
        })
        .catch((error) => {
          console.log(error)
        });
    };
  
    return (
        <SafeAreaView style ={{alignItems:"center",backgroundColor:"#f2f2f2",height:"100%"}}>
        <Image
        resizeMode={"center"}
        style = {styles.imglogo}
         source={{uri:"https://pngimage.net/wp-content/uploads/2018/05/background-logo-png-5.png"}}
        ></Image>
          <Text style={styles.titlestyle}>ABC Translate</Text>
            <View style = {styles.container}>
              <Text style ={{textAlign:"center", marginTop: 10}}> Tr-En </Text>
              <View style={styles.ınptwiev}>
              <TextInput
                numberOfLines={5}
                placeholder = "örn: Staj Başvurun Kabul Edildi!"
                multiline={true}
                style={styles.txtınpt}
                onChangeText={text => setText(text)}
              />
              </View>
              <View style={styles.btnortala}>
             <View style={styles.btnview}>
              <TouchableOpacity
                onPress={() => postTranslateService(inputText)}
              ><Text
              style ={styles.btnstyl}
              >Çevir!</Text>
              </TouchableOpacity>
             </View>
             </View>
              <View style ={styles.ortalatran}>
                <View style ={styles.textstyl}>
              <Text style = {styles.translatetext}>{'Çeviri: ' +responseText}</Text>
              </View>
              </View>
            </View>
         
        </SafeAreaView>
    
    );
  };

  const styles = StyleSheet.create({
    container:{
      paddingVertical: 15,
      width: "90%",
      height: "56%",
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
    translatetext: {
      marginVertical: 5,
      fontSize: 16,
      fontWeight: "bold"
    },
    scrlwiev: {
      flexDirection: "column",
    },
    ortalatran:{
      flexDirection: "row",
      justifyContent: "center",
      
    },
    textstyl: {
      backgroundColor: "#f2f2f2",
      borderColor: "#DEDDDB",
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
      width: "90%",
      height: 150,
    },
    btnortala:{
      flexDirection: "row",
      justifyContent: "center",
    },
    btnview:{
      width: "50%",
    },
    btnstyl:{
      borderColor: "#DEDDDB",
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
      backgroundColor: "#DEDDDB",
      textAlign: "center",
      paddingVertical: 10,
      marginVertical: 10,
      fontSize: 20,
      fontWeight: "bold",
    },
    txtınpt:{
      backgroundColor: "#f2f2f2",
      borderColor: "#DEDDDB",
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
      width: "90%",
      height: 50,
    },
    imglogo: {
      marginTop: 15,
      width: "100%",
      height: "10%",
      alignItems: "center",
    },
    titlestyle: {
      textAlign: "center",
      fontSize: 24,
      fontFamily: "bold",
      marginBottom: 42
    },
    ınptwiev:{
      flexDirection: "row",
      justifyContent: "center",
      
    }
  })
  
  export default App;