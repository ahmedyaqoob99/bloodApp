import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const Root = (props) => {
    return (
        <>
            <View style={style.main}>
                <Text style={style.text}>If You Donate Blood, Click Here</Text>
                <TouchableOpacity style={style.btn} onPress={()=>{props.navigation.navigate("BloodDonate")}}>
                    <Text style={{color: "#ffffff"}}>Blood Donate</Text>
                </TouchableOpacity>
                <Text style={style.text}>If You Want Blood, Click Here</Text>
                <TouchableOpacity style={style.btn} onPress={()=>{props.navigation.navigate("Home")}}>
                    <Text style={{color: "#ffffff"}}>Blood Request</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    main:{
        flex: 3,
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center", 
        paddingTop: "5%"
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
        marginTop: "2%",
        marginBottom: "2%",
        color: "#763626"
    }
});

export default Root
