import React from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'
import {THEME} from "../theme";
import {AppCard} from "../components/ui/AppCard";

export const TodoScreen = ({goBack,todo}) =>{
	return <View>
		<Text>{todo.title}</Text>
		<AppCard>
			<Text>{todo.title}</Text>
			<Button title='Редактировать'/>
		</AppCard>
		<View style={styles.buttonContainer}>
			<View style={styles.buttonContains}>
		<Button color={THEME.GREY_COLOR} title="Назад"
		onPress={goBack}/>
			</View>
			<View style={styles.buttonContains}>
		<Button title="Удалить"
		        color={THEME.DANGER_COLOR}
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
	width:'40%'
	}
});
