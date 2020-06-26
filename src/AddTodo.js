import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button,Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
	
	const [value, setValue] = useState ('');
	
	const pressHandler = () => {
		if(value.trim()){
			onSubmit (value);
			setValue('')
		}else{
		Alert.alert('Название дела не может быть пустым')
		}
		
	};
	
	return (
		<View style={styles.block}>
			<TextInput style={styles.input}
			           onChangeText={setValue}
			           value={value}
			           placeholder="Введите задачу"
			           autoCorrect={false}
			           autoCapitalize='none'
			           
			
			/>
			<Button onPress={pressHandler} style={styles.button} title='Добавить'/>
		</View>
	)
};

const styles = StyleSheet.create ({
	
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15
	},
	input: {
		padding: 10,
		width: '70%',
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#3949ab',
		marginBottom: 10
	}
	
});
