import React,{useState} from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'
import {THEME} from "../theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack,todo,onRemove,onSave}) =>{
	
	const [modal,setModal]=useState(false);
	const saveHandler=title=>{
	onSave(todo.id,title);
		setModal(false);
	};
	return( <View>
		<EditModal value={todo.title}
		           visible={modal}
		           onCancel={()=>setModal(false)}
		onSave={saveHandler}
		/>
		<AppCard style={styles.card}>
			<Text style={styles.title}>{todo.title}</Text>
			<Button title='Ред.' onPress={()=>setModal(true)}/>
		</AppCard>
		<View style={styles.buttonContainer}>
			<View style={styles.buttonContains}>
		<Button color={THEME.GREY_COLOR} title="Назад"
		onPress={goBack}/>
			</View>
			<View style={styles.buttonContains}>
		<Button title="Удалить"
		        color={THEME.DANGER_COLOR}
		onPress={()=>onRemove(todo.id)}/>
			</View>
		</View>
	</View>)
};


const styles = StyleSheet.create({
buttonContainer:{
	flexDirection:'row',
	justifyContent:'space-between'
},
	card:{
	marginBottom:20,
		padding:15
	},
	buttonContains:{
	width:'40%'
	},
	title:{
	fontSize:26
	}
	
});
