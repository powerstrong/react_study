import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': '이주성',
  'birthday': '850504',
  'gender': '남자',
  'job': '아저씨'
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
