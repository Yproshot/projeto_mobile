import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Dialog, MD3Colors, Portal, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'

export default function ListaAlunosAsyncStorage({ navigation }) {

  const [alunos, setAlunos] = useState([])

  useState(() => {
    getAlunos()
    console.log("🚀 ~ file: ListaAlunosStorage.js:11 ~ getAlunos ~ alunos:", alunos)
  }, [])

  async function getAlunos() {
    await AsyncStorage.getItem('@alunos').then(response => {
      const resultado = JSON.parse(response) || []
      setAlunos(resultado)
    })
  }

  async function adicionar(aluno) {
    try {
      const novaListaAlunos = alunos
      alunos.push(aluno)
      await AsyncStorage.setItem('@alunos', JSON.stringify(novaListaAlunos))
      setAlunos(novaListaAlunos)
      Toast.show({ type: 'success', text1: 'Aluno adicionada com sucesso!' })
    } catch (error) {
      console.error("Erro ao adicionar aluno: ", error)
      Toast.show({ type: 'error', text1: 'Erro ao adicionar aluno' })
    }
  }

  async function editar(aluno, newAluno) {
    try {
      const novaListaAlunos = alunos.map(item => item === aluno ? newAluno : item)
      await AsyncStorage.setItem('@alunos', JSON.stringify(novaListaAlunos))
      setAlunos(novaListaAlunos)
      Toast.show({ type: 'success', text1: 'Aluno editado com sucesso!' })
    } catch (error) {
      console.error("Erro ao adicionar aluno: ", error)
      Toast.show({ type: 'error', text1: 'Erro ao adicionar aluno' })
    }
  }

  async function excluir(aluno) {
    try {
      const novaListaAlunos = alunos.filter(item => item !== aluno)
      await AsyncStorage.setItem('@alunos', JSON.stringify(novaListaAlunos))
      setAlunos(novaListaAlunos)
      Toast.show({ type: 'success', text1: 'Aluno excluido com sucesso!' })
    } catch (error) {
      console.error("Erro ao adicionar aluno: ", error)
      Toast.show({ type: 'error', text1: 'Erro ao adicionar aluno' })
    }
  }


  return (
    <View style={styles.container}>

      <View style={{ padding: 5 }}>
        <Text variant='titleLarge' style={{ textAlign: 'center', fontWeight: 'bold' }}>Lista</Text>
      </View>

      <FlatList
        style={styles.list}
        data={alunos}
        renderItem={({ item }) => (
          <>
            <Card mode='outlined' style={styles.card}>

              <Card.Content style={styles.cardContent}>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontWeight: 'bold' }}>{item.nome}</Text>
                  <Text>Turno: {item.turno}</Text>
                  <Text>Curso: {item.curso}</Text>
                </View>
              </Card.Content>

              <Card.Actions>
                <Button
                  onPress={() => navigation.navigate('FormAlunosAsyncStorage', { acao: editar, aluno: item })}
                >
                  Editar
                </Button>

                <Button
                  onPress={() => excluir(item)}
                >
                  Excluir
                </Button>
              </Card.Actions>

            </Card>

          </>
        )}


      />

      <Button
        style={styles.button}
        mode='contained'
        onPress={() => navigation.navigate('FormAlunoAsyncStorage', { acao: adicionar })}
      >
        Adicionar
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '95%'
  },
  card: {
    margin: 5
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: MD3Colors.primary80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 10,
  },
  button: {
    margin: 10,
    width: '90%'
  }
})