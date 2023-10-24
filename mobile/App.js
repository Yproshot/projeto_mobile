

/*import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, _View } from 'react-native';
import Router from './Router/Router';


const Cronometro = () => { {/*
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [pausado, setPausado] = useState(true);
  const [ultimoTempo, setUltimoTempo] = useState('');

  useEffect(() => {
    let intervalo = null;

    if (!pausado) {
      intervalo = setInterval(() => {
        if (segundos === 59) {
          if (minutos === 59) {
            setHoras((horas) => horas + 1);
            setMinutos(0);
          } else {
            setMinutos((minutos) => minutos + 1);
          }
          setSegundos(0);
        } else {
          setSegundos((segundos) => segundos + 1);
        }
      }, 1000);
    } else if (pausado && segundos !== 0) {
      clearInterval(intervalo);
    }
  
    return ()=> clearInterval(intervalo);
  }, [pausado, segundos, minutos, horas]);

  const iniciarCronometro = () => {
    setPausado(false);
  };

  const pausarCronometro = () => {
    setPausado(true);
    setUltimoTempo(`${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
  };

  const reiniciarCronometro = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setPausado(true);
    setUltimoTempo('');
  };
*/
/*}
  return (
      <View style={styles.container}>

        <Router>
          
        </Router>
      {/*<Text style={styles.texto}>{horas.toString().padStart(2, '0')}:{minutos.toString().padStart(2, '0')}:{segundos.toString().padStart(2, '0')}</Text>
      <TouchableOpacity style={styles.botao} onPress={pausado ? iniciarCronometro : pausarCronometro}>
        <Text style={styles.textoBotao}>{pausado ? 'Iniciar' : 'Pausar'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={reiniciarCronometro}>
        <Text style={styles.textoBotao}>Reiniciar</Text>
      </TouchableOpacity>
      {ultimoTempo !== '' && (
        <Text style={styles.ultimoTempo}>Último tempo: {ultimoTempo}</Text>
      )}*/
/*      </View>

 


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  texto: {
    fontSize: 48,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
  },
  ultimoTempo: {
    fontSize: 16,
    marginTop: 10
  },
});

export default Cronometro;
*/

import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Divider, IconButton, Text, TextInput } from 'react-native-paper'

export default function ListaCar() {
  const [total, setTotal] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editing, setEditing] = useState(false)
  const [isEditing, setIsEditing] = useState(null)

  function addTotal() {
    let todoLista = total
    todoLista.push(inputValue)
    setTotal(todoLista)
    setIsEditing(null)
    setInputValue('')
  }

  function editTotal() {
    let totalList = total
    totalList.splice(total.indexOf(isEditing), 1, inputValue)
    setTotal(totalList)
    setEditing(false)
    setInputValue('')
  }

  function deleteTotal(total2) {
    const totalList = total.filter(item => item !== total2)
    setTotal(totalList)
  }

  function handleEditTotal(total) {
    setIsEditing(total)
    setInputValue(total)
    setEditing(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Car List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 4 }}
          mode='outlined'
          label='Car'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => (editing) ? editTotal() : addTotal()}
        >
          {editing ? 'Edit' : 'Add'}
        </Button>

      </View>

      <FlatList
        style={styles.list}
        data={total}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            mode='outlined'
          >
            <Card.Content style={styles.cardContent}>
              <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
              <IconButton icon='pen' onPress={() => {
                handleEditTotal(item)
              }} />
              <IconButton icon='trash-can-outline' onPress={() => {
                deleteTotal(item)
              }} />
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  inputContainer: {
    flexDirection: 'row',
    width: '95%',
    paddingTop: 10,
    gap: 5,
    paddingBottom: 30,
    borderBottomColo: "black",
    borderBottomWidth: 2
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    width: '95%',
    marginTop: 10
  },
  card: {
    margin: 5
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 300
  },
  divider : {
    backgroundColor: "red",
    width: 30
  }
})