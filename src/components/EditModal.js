import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native'
import {THEME} from "../theme";
import {Alert} from "react-native-web";

export const EditModal = ({visible, onCancel, value,onSave}) => {
	
	const [title, setTitle] = useState (value);
	
	
	const saveHandler=()=>{
		if (title.trim().length<3){
			Alert.alert('Ошибка',`Минимальная длина названия 3 символа. Сейчас ${title.trim().length} символов` )
			
		}else{
		onSave(title);
		}
	};
	return (
		<Modal visible={visible}
		       animationType="slide"
		       transparent={false}>
			<View style={styles.wrap}>
				<TextInput style={styles.input}
				           onChangeText={setTitle}
				           placeholder="Введите новое значение"
				           autoCapitalize='none'
				           autoCorrect={false}
				           maxLength={64}
				/>
				<View style={styles.buttons}>
					<Button color={THEME.DANGER_COLOR} title='Отменить' onPress={onCancel}/>
					<Button title='Сохранить'/>
				</View>
			</View>
		</Modal>
	
	)
};

const styles = StyleSheet.create ({
	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		marginBottom: 20,
		padding: 10,
		borderBottomColor: THEME.MAIN_COLOR,
		borderBottomWidth: 2,
		width: "80%"
	},
	buttons: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
});

