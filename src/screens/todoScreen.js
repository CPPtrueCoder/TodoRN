import React from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'


export const TodoScreen = ({goBack,todo}) =>{
	return <View>
		<Text>{todo.title}</Text>
		<View style={styles.buttonContainer}>
			<View style={styles.buttonContains}>
		<Button title="Назад"
		onPress={goBack}/>
			</View>
			<View style={styles.buttonContains}>
		<Button title="Удалить"
		        color='#ff0000'
		onPress={()=>console.log('Deleted')}/>
			</View>
		</View>
	</View>
};


const styles = StyleSheet.create({
buttonContainer:{
	flexDirection:'row',
	justifyContent:'space-between'
},
	buttonContains:{
	
	}
});
