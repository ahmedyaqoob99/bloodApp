import React,{useState} from 'react';
import {View,Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import '../Config/Firebase';

const SignUp = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    
  const saveData = () => {

      if(rePassword !== "" && username !== "" && password !== "")
      {
        if (password === rePassword && password.length > 5) {
            try {
                firebase.auth().createUserWithEmailAndPassword(username,password);      
                alert("Congratulation! Your Account is Successfully Created.")
                setRePassword("")
                setUsername("")
                setPassword("")
                props.navigation.navigate("Login")
            } catch (error) {
                console.log(error.message)    
            }
        }else{
            alert("Password should be at least 6 Character And Password doesn't Match")
        }
      }
      else{
          if(username === "")
          {
              alert("Please Insert Your Username")
          } 
          else{
            if(password === "" && password.length > 5)
            {
                alert("Please Insert Your Password")
            }
            else{    
                if(rePassword === "" && rePassword.length > 5)
                {
                    alert("Please Re-Type Password")
                }
            }  
          }
      }
  }

  return (
      <>
      <View style={style.container}>
          <View style={style.header}> 
              <Text style={style.headerText}>SIGN UP</Text>
          </View>
          <View style={style.main}>       
              <Text style={style.text}>USERNAME (example@gmail.com)</Text>
              <TextInput value={username} onChangeText={(text)=>{setUsername(text)}} style={style.inputText}></TextInput>
              <Text style={style.text}>PASSWORD</Text>
              <TextInput value={password} onChangeText={(text)=>{setPassword(text)}} secureTextEntry={true} style={style.inputText}></TextInput>
              <Text style={style.text}>Re-Type Password</Text>
              <TextInput value={rePassword} onChangeText={(text)=>{setRePassword(text)}} style={style.inputText}></TextInput>
              <TouchableOpacity style={style.btn} onPress={saveData}>
                  <Text style={{color: "#ffffff"}}>SignUp</Text>
              </TouchableOpacity>
              <View style={style.footer}>
                  <TouchableOpacity style={style.btn} onPress={()=>{props.navigation.navigate("Login")}}>
                      <Text style={{color: "#ffffff"}}>Back To Login</Text>
                  </TouchableOpacity>
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
      alignItems: "center"
  },
  text:{
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

export default SignUp;
