import React,{useState} from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as firebase from 'firebase'; 

const BloodDonate = (props) => {

    const [blood,setBlood] = useState([
        {
            label: "O+",
            value: 'O+',
        }, 
        {
            label: "O-",
            value: 'O-',
        },
        {
            label: "A+",
            value: 'A+',
        }, 
        {
            label: "A-",
            value: 'A-',
        },
        {
            label: "B+",
            value: 'B+',
        }, 
        {
            label: "B-",
            value: 'B-',
        },
        {
            label: "AB+",
            value: 'AB+',
        }, 
        {
            label: "AB-",
            value: 'AB-',
        }
    ]);
    const [city,setCity] = useState([
        {
            label: "Lahore",
            value: 'Lahore'
        },
        {
            label: "Karachi",
            value: 'Karachi'
        },
        {
            label: "Peshawar",
            value: 'Peshawar'
        },
        {
            label: "Quetta",
            value: 'Quetta'
        }
    ]);

    const [name, setName] = useState("");
    const [selectedBlood,setSelectedBlood] = useState("");
    const [selectedCity,setSelectedCity] = useState("");
    const [contact, setContact] = useState("");
    
    const saveData = () => {
        let user = {
            name,
            selectedBlood,
            selectedCity,
            contact
        }

        
        if(name !== "" && selectedBlood !== "" && selectedCity !== "" && contact !== "")
        {
            let success = firebase.database().ref('/bloodDonate').push(user);
            if(success !== "" || success !== null)
            {
                alert("Thanks! For Donate Blood, Please Come Again.")
                setName("")
                setSelectedBlood("")
                setSelectedCity("")
                setContact("")
                
                setTimeout(() => {
                    props.navigation.navigate("Root")
                }, 3000)
                
            }
        }
        else{
            if(name === "")
            {
                alert("Please Insert Your Name")
            }
            else{
                if(selectedBlood === "")
                {
                    alert("Please Insert Your BloodGroup")
                }
                else{
                    if(selectedCity === "")
                    {
                        alert("Please Insert Your City")
                    }   
                    else{
                        if(contact === "")
                        {
                            alert("Please Insert Your Contact")
                        }   
                    }
                }
            }
        }

    }

    return (
        <>
        <ScrollView style={style.scroll}>
            <View style={style.container}>    
                <View> 
                    <Text style={style.headerText}>Thanks! For Donate Blood</Text>
                </View>
                <View style={style.main}>
                    <Text style={style.text}>NAME</Text>
                    <TextInput style={style.inputText} onChangeText={text=> setName(text)}></TextInput>
                    <Text style={style.text}>BLOOD GROUP</Text>
                    <Picker
                        selectedValue={selectedBlood}
                        style={style.dropDown}
                        onValueChange={text=>setSelectedBlood(text)}>

                        {blood.map((v,i) => <Picker.Item key={i} label={v.value} value={v.value} />
                        )}
                        
                    </Picker>
                    <Text style={style.text}>City</Text>
                    <Picker
                        selectedValue={selectedCity}
                        style={style.dropDown}
                        onValueChange={text=>setSelectedCity(text)}>

                        {city.map((v,i) => <Picker.Item key={i} label={v.value} value={v.value} />
                        )}
                    </Picker>
                    
                    <Text style={style.text}>CONTACT #</Text>
                    <TextInput style={style.inputText} onChangeText={text=> setContact(text)}></TextInput>

                    <TouchableOpacity style={style.btn} onPress={saveData}>
                        <Text style={{color: "#ffffff"}}>Send Request</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    scroll:{
        backgroundColor: "#763626",
        width: "100%",
        height: "100%"
    },
    container:{
        backgroundColor: "#763626",
        width: "100%",
        height: "100%"
    },
    headerText:{
        color: "#ffffff",
        fontSize: 26,
        marginTop: "2%",
        marginBottom: "2%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    main:{
        flex: 3,
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 15,
        alignItems: "center", 
        paddingTop: "5%",
    },
    btn:{
        borderRadius: 15,
        backgroundColor: "#763626",
        width: 130,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1%"
    },
    text:{
        color: "#763626"
    },
    inputText:{
        width: "50%",
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
    },
    dropDown:{
        width: "50%",
        color: "#763626",
        borderWidth: 1,
        borderColor: "#763626",
    }
});

export default BloodDonate
