'use strict';

import firebase from 'firebase'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import styles from './app/styles.js';
import Welcome from './app/components/BudgetApp.js'



AppRegistry.registerComponent('BudgetApp', () => Welcome);
