import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

export default function FormAlunoAsyncStorage({ navigation, route }) {

  const acao = route.params.acao
  const aluno = route.params.aluno

  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState('')
  const [turno, setTurno] = useState('')
  const [curso, setCurso] = useState('')

  const [showMensagemErro, setShowMensagemErro] = useState(false)

  useState(() => {
    if (aluno) {
      setNome(aluno.nome)
      setMatricula(aluno.matricula)
      setTurno(aluno.turno)
      setCurso(aluno.curso)
    }

  }, [])

  useState(() => {
    return () => {
      setNome('')
      setMatricula('')
      setTurno('')
      setCurso('')
    }
  })

  useState(() => {

  }, [])


  function salvar() {

    if (!nome || !matricula || !turno || !curso) {
      setShowMensagemErro(true)
      return
    }

    const newAluno = {
      nome,
      matricula,
      turno,
      curso
    }

    if (aluno) {
      acao(aluno, newAluno)
    } else {
      acao(newAluno)
    }

    navigation.goBack()

  }


  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>

        {showMensagemErro && (
          <Text style={{ color: 'red' }}>Preencha todos os campos!</Text>
        )}

        <TextInput
          style={styles.input}
          label={'Nome'}
          placeholder='Digite o nome'
          mode='outlined'
          value={nome}
          onChangeText={text => setNome(text)}
          onFocus={() => setShowMensagemErro(false)}
        />

        <TextInput
          style={styles.input}
          label={'Matricula'}
          placeholder='Digite o matricula'
          mode='outlined'
          keyboardType='numeric'
          value={matricula}
          onChangeText={text => setMatricula(text)}
          onFocus={() => setShowMensagemErro(false)}
        />

        <TextInput
          style={styles.input}
          label={'Turno'}
          placeholder='Digite o turno'
          mode='outlined'
          keyboardType='numeric'
          value={turno}
          onChangeText={text => setTurno(text)}
          onFocus={() => setShowMensagemErro(false)}
        />

        <TextInput
          style={styles.input}
          label={'Curso'}
          placeholder='Digite o Curso'
          mode='outlined'
          keyboardType='numeric'
          value={curso}
          onChangeText={text => setCurso(text)}
          onFocus={() => setShowMensagemErro(false)}
        />

      </View>

      <View style={styles.buttonContainer}>

        <Button
          style={styles.button}
          mode='contained-tonal'
          onPress={() => navigation.goBack()}
        >
          Voltar
        </Button>

        <Button
          style={styles.button}
          mode='contained'
          onPress={salvar}
        >
          Salvar
        </Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    width: '90%',
    padding: 5,
    paddingTop: 20
  },
  input: {
    marginTop: 15,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 5,
    gap: 10
  },
  button: {
    flex: 1,
    margin: 5
  }
})