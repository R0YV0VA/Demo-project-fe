import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'reactstrap'

export function FlatButton(props){
    return (
        <Button style={buttonStyle.button} color={props.color} onClick={props.onPress} outline>{props.text}</Button>
    )
}

const buttonStyle = StyleSheet.create({
    button: {
        margin: 5,
        width: 270,
    }
})