import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import {Navbar} from "./src/components/navbar";
import {MainScreen} from "./src/screens/main";
import {TodoScreen} from "./src/screens/todoScreen";

export default function App() {
	 const [todos, setTodos] = useState ([])//[
	// 	{id: '1', title: 'Learn React Native'},
	// 	{id: '2', title: 'Learn Navigation'},
	// ]);
	const [todoId, setTodoId] = useState (null);
	
	const addTodo = (title) => {
		// const newTodo={
		//     id:Date.now().toString(),
		//     title:title
		// };
		//  setTodos(todos.concat([newTodo]))
		//   setTodos((prevTodos)=>{
		//       return[
		//           ...prevTodos,newTodo
		//       ]
		//   });
		
		setTodos (prev => [...prev,
			{
				id: Date.now ().toString (),
				title
			}])
		
	};
	
	const removeTodo = id => {
		const todo = todos.find (t => t.id === id);
		Alert.alert (
			'Удаление элемента',
			`Вы уверены, что хотите удалить ${todo.title}`,
			[
				
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{
					text: 'Anyway', onPress: () => {
						setTodoId (null);
						setTodos (prev => prev.filter (todo =>
							todo.id !== id))
					}
				}
			],
			{cancelable: false}
		);
		
	};
	const updateTodo = (id, title) => {
		setTodos (old => old.map (todo => {
			if (todo.id === id) {
				todo.title = title;
				
			}
			return todo;
		}))
		
	};
	let content = (
		<MainScreen todos={todos}
		            addTodo={addTodo}
		            removeTodo={removeTodo}
		            openTodo={setTodoId}
		/>
	);
	if (todoId) {
		const selectedTodo = todos.find (todo => todoId === todo.id);
		content = <TodoScreen onRemove={removeTodo}
		                      goBack={() => setTodoId (null)}
		                      todo={selectedTodo}
		                      onSave= {updateTodo}/>
	}
	
	return (
		<View>
			<Navbar title='Todo App'/>
			<View style={styles.container}>
				{content}
			
			</View>
			<StatusBar style="auto"/>
		</View>
	);
}

const styles = StyleSheet.create ({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20
	}
	
});
