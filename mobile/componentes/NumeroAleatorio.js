import React from 'react'
import {StyleSheet, Text , View} from 'react-native'

export default function NumeroAleatorio(props){
    const {min, max} = props

    const delta = max - min
    const NumeroAleatorio = Math.floor(Math.random() * delta) + min

    return(
        <View>
            <Text style={{fontSize: 20}}>O numero aleatorio é:{NumeroAleatorio}</Text>
        </View>
    )
}