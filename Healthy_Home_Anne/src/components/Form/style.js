import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	formContext: {
		width:"100%",
		height:"100%",
		bottom:0,
		backgroundColor:"#6495ed",
		alignItems:"center",
		borderTopLeftRadius:30,
		borderTopRightRadius:30,
		marginTop:30,
	},
	form:{
		width:"100%",
		height:"auto",
		marginTop: 30,
		padding: 10,
	},
	formLabel:{
		color:"#000000",
		fontSize: 18,
		paddingLeft: 20,
	},
	input:{
		width:"90%",
		borderRadius: 50,
		backgroundColor:"#f0f8ff",
		height:40,
		margin:12,
		paddingLeft: 10,
	},
	buttonCalculator:{
		borderRadius: 50,
		alignItems:"center",
		justifyContent:"center",
		width:"90%",
		backgroundColor:"#f0f8ff",
		paddingTop:14,
		paddingBottom:14,
		marginLeft:12,
		margin:30,
		
	},
	textButtonCalculator:{
		fontSize: 25,
		color:"#000000",
	},
	errorMessage:{
		fontSize: 17,
		color:"red",
		fontWeight:"bold",
		paddingLeft:20,
	}

});
export default styles