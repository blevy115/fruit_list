import React, { Component } from 'react';
import './App.css';
import FruitContainer from './FruitContainer.js'

const FruitList = props => (
  <ul>
    {props.fruis.map(fruit => <li>{fruit}</li>)}
  </ul>
)

const FruitFilter = props => (
  <div>
    <label htmlFor="fruit-filter">Filyer these Fruits: </label>
    <input type="text" value ={props.value} onChange={props.onChange} name="fruit-filer" />
  </div>
)
