import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Profile() {
  
    const pessoas = {
        imgUri:'https://www.fakepersongenerator.com/Face/female/female20151024152487152.jpg',
        genero:'female',
        nome: 'Clara A Evans',
        telefone: '906-780-1681',
        email: 'adolph_ziem3@yahoo.com'
    }


    return (
    <View style={styles.container}>
      
      <Image
      source={{uri: pessoas.imgUri}}
      style={styles.img}/>
      <Text style={[styles.texto, styles.textoLabel]}>{pessoas.email} </Text>
      <Text style={[styles.texto, styles.textoLabel]}>{pessoas.telefone} </Text>
      <Text style={[styles.texto, styles.textoLabel]}>{pessoas.genero} </Text>
      <Text style={[styles.texto, styles.textoLabel]}>{pessoas.email} </Text>
   

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        margin: 20,
        marginTop:50,
        padding: 10
        
    }, img: {
        width: 250,
        height: 250,
        borderWidth: 3,
        borderColor: 'gray',
        borderRadius: 50,
        padding: 2
    },
    labelContainer: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
    },
    texto: {
        fontSize: 23
    },
    textoLabel: {
        color: 'black',
        fontWeight: 'bold'
    }
})