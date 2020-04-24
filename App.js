
import React, { Fragment, useState } from 'react';

import Register from "./src/pages/register";
import Transslate from "./src/pages/translate";
import Loginn from "./src/pages/login";

export default function App() {
  return (
    <Loginn/>
  );
}

/*
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Register from "./src/pages/register";
import Transslate from "./src/pages/translate";
import Loginn from "./src/pages/login";

export default class App extends Component {
  render() {
    return (
      <View>
        <Loginn/>
      </View>
      
    );
  }
}
*/