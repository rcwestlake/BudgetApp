'use strict';

import firebase from 'firebase'
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
 } from 'react-native';
import Application from './app/components/Application.js';


AppRegistry.registerComponent('BudgetApp', () => Application);
