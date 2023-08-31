import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Filho(props) {
  function gerarNumeroAleatorio(min, max){
    const delta = max - min
    const numeroAleatorio = Math.floor(Math.random * delta)+ min
    props.funcao(numeroAleatorio)
  }
  return (
    <View>
      <Button
      title='gerar numero aleatorio'
      onPress={()=>{gerarNumeroAleatorio(props)}}/>
    </View>
  )
}

const styles = StyleSheet.create({})