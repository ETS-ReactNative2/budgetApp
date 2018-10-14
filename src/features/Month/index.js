import React from 'react';
import { View, Text  } from 'react-native';
import AddTodo from './containers/AddTodo.js';
import VisibleTodoList from './containers/VisibleTodoList.js';
import Footer from './components/Footer.js';

const Month = () => (
	<View>
		<VisibleTodoList/>
    <AddTodo/>
		<Footer/>
	</View>
);

export default Month;
