import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function ButtonComponent(props){
    return(
        
        <TouchableOpacity
        style={styles.buttonDesign}
        >
            <Text {...props} style={styles.font}></Text>
        </TouchableOpacity>
        
    )
}
export default ButtonComponent

const styles=StyleSheet.create({
    buttonDesign:{
        width:'90%', 
        backgroundColor:'#d3ab34', 
        padding:15, 
        marginTop:20, 
        borderRadius:10, 
        alignItems:'center', 
        justifyContent:'center'
    },
    font:{
        fontSize:20
    }
})