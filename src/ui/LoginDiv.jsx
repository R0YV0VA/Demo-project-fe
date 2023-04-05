import React from 'react'
import { StyleSheet } from 'react-native'

export default function LoginDiv(props) {
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
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fff',
    }
})