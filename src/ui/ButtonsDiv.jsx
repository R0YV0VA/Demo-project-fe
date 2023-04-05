import React from 'react'
import { StyleSheet } from 'react-native'

export default function ButtonsDiv(props) {
    return (
        <div style={logoStyle.div}>
            {props.children}
        </div>
    )
}

const logoStyle = StyleSheet.create({
    div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})