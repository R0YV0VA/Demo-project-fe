import React from "react";
import { StyleSheet } from 'react-native'

export function LogInput (props) {
    return (
        <div style={inputStyle.div}>
            <label for={props.name} style={inputStyle.label}>{props.label}</label>
            <input type={props.type} onChange={props.onChange} style={inputStyle.input}/>
        </div>
    );
}

const inputStyle = StyleSheet.create({
    input: {
        width: "100%",
        height: 40,
        padding: 10,
        margin: 10,
        border: '1px solid black',
        borderRadius: 5,
        fontSize: 20,
    },
    label: {
        fontSize: 22,
        color: 'black',
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
})