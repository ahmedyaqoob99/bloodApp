import React,{useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import * as firebase from 'firebase';
import '../Config/Firebase';

const Main = (props) => {
    const [mainData, setMainData] = useState();

    async function getBlood(){
        console.log("running");
        try {
            let items = [];
            
            await firebase.database().ref('/bloodDonate').once("value", data => {
                // console.log(data.val())
                data.forEach((child) => {
                    items.push({
                        Name: child.val().name,
                        Username: child.val().username,
                        City: child.val().selectedCity,
                        Blood: child.val().selectedBlood,
                        Contact: child.val().contact,
                        _key: child.key
                    })
                })
                    
            })
            if(mainData === "") setMainData(items)
        } catch (error) {
            console.log(error);
        }
    }
    // getBlood()

    return (
        <>
            <View style={style.container}>               
                <View> 
                    <Text style={style.headerText}>Finding {props.blood} in {props.city}...</Text>
                </View> 
                <FlatList
                    style={style.main}
                    data={[
                        { BloodGroup: 'B+', Name: 'Talha Yaqoob', City: 'Karachi', key: 'item1' },
                        { BloodGroup: 'B+', Name: 'Ahmed Yaqoob', City: 'Lahore', key: 'item2' },
                        { BloodGroup: 'A+', Name: 'Furqan Yaqoob', City: 'Peshawar', key: 'item3' },
                        { BloodGroup: 'O+', Name: 'Mehmood Yaqoob', City: 'Quetta', key: 'item4' },
                    ]
                    }
                    renderItem={({ item, index, separators }) => (
                        <TouchableHighlight
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={style.card}>
                                <Text style={style.cardLeft}>{item.BloodGroup}</Text>
                                <View style={style.cardRight}>    
                                    <Text style={style.cardName}>{item.Name}</Text>
                                    <Text style={style.cardContact}>{item.City}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )}
                />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#763626",
        width: "96%",
        height: "100%",
        marginTop: "1%",
        marginLeft: "2%",
        marginRight: "2%"
    },
    headerText:{
        color: "#ffffff",
        fontSize: 22,
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
        // alignItems: "center", 
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
    card:{
        flex: 1,
        height: 70,
        width: "96%",
        flexDirection: "row",
        borderWidth: 1,
        borderBottomColor: "#763626",
        marginBottom: "2%",
        marginTop: "1%",
        marginLeft: "2%",
        marginRight: "2%",
        borderRadius: 15
    },
    cardLeft:{
        flex: 1,
        fontSize: 30,
        paddingTop: "2%",
        paddingBottom: "2%",
        paddingLeft: "5%",
        backgroundColor: "#763626",
        borderRadius: 15,
        color: "#ffffff"
    },
    cardRight:{
        height: 200,
        flex: 4,
        alignItems: "flex-start",
        paddingTop: "1%",
        paddingLeft: "2%",
        // backgroundColor: "red"
    },
    cardName: {
        fontSize: 24,
        color: "#763626"
    },
    cardContact: {
        color: "#763626"
    }
});

export default Main
