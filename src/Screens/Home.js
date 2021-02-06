import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Main from './Main';
const Home = (props) => {

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

    const [selectedBlood,setSelectedBlood] = useState("");
    const [selectedCity,setSelectedCity] = useState("");
    const [search,setSearch] = useState(false);

    const searchBlood = () => {
        if(selectedBlood !== "" && selectedCity !== ""){
            setSearch(true)
        }else{
            if(selectedBlood === ""){
                alert("Please Select Blood Group")
            }else if(selectedCity === ""){
                alert("Please Select City")
            }
        }
    }
    return (
        <>
                <View style={style.container}>    
                    <View> 
                        <Text style={style.headerText}>Select Your Blood Group</Text>
                    </View>
                    <View style={style.main}>
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
                        
                        <TouchableOpacity style={style.btn} onPress={searchBlood}>
                            <Text style={{color: "#ffffff"}}>Send Request</Text>
                        </TouchableOpacity>

                        {search && <Main blood={selectedBlood} city={selectedCity}/>}
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
        alignItems: "center"
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

export default Home