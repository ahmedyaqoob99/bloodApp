import React,{useState,useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import * as firebase from 'firebase';
import '../Config/Firebase';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginData = () => {
        if(username !== "" && password !== "")
        {
            try {
                firebase.auth().signInWithEmailAndPassword(username, password)
                   .then(res => {
                       console.log(res.user.email);
                       props.navigation.navigate("Root")
                    })
                    .catch(err => alert(err));
            } catch (error) {
                console.log(error);
            }
        }else{
            alert("Please enter correct 'Username' and 'Password'")
        }
    }
    return (
        <>
        <View style={style.container}>
            <View style={style.header}> 
                <Text style={style.headerText}>LOGIN</Text>
            </View>
            <View style={style.main}>       
                <Text style={style.text}>USERNAME</Text>
                <TextInput style={style.inputText} onChangeText={text=>setUsername(text)}></TextInput>
                <Text style={style.text}>PASSWORD</Text>
                <TextInput secureTextEntry={true} style={style.inputText} onChangeText={text=>setPassword(text)}></TextInput>
                <TouchableOpacity style={style.btn} onPress={loginData}>
                    <Text style={{color: "#ffffff"}}>LOGIN</Text>
                </TouchableOpacity>
                <View style={style.footer} onPress={()=>{props.navigation.navigate("SignUp")}}>
                    <Text style={style.text} onPress={()=>{props.navigation.navigate("SignUp")}}>Don't have an Account? <Text style={style.textBold}>Sign Up</Text></Text>
                </View>
            </View>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#763626",
        width: "100%",
        height: "100%"
    },
    header:{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText:{
        color: "#ffffff",
        fontSize: 30
    },
    main:{
        flex: 3,
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 15,
        alignItems: "center", 
        paddingTop: "5%",
    },
    footer:{
        marginTop: "5%"
    },
    btn:{
        borderRadius: 15,
        backgroundColor: "#763626",
        width: 130,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2%"
    },
    text:{
        color: "#763626"
    },
    textBold:{
        fontWeight: "bold",
        color: "#763626"
    },
    inputText:{
        width: 200,
        height: 40,
        paddingBottom: "1%",
        color: "#763626",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#763626",
        borderRadius: 15,
        marginTop: "1%",
        marginBottom: "3%",
        paddingLeft: "1%"
    }
});

export default Login