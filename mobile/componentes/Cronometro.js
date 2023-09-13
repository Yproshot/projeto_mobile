import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [pausado, setPausado] = useState(true);

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

    return () => clearInterval(intervalo);
  }, [pausado, segundos, minutos, horas]);

  const iniciarCronometro = () => {
    setPausado(false);
  };

  const pausarCronometro = () => {
    setPausado(true);
  };

  const reiniciarCronometro = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setPausado(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{horas.toString().padStart(2, '0')}:{minutos.toString().padStart(2, '0')}:{segundos.toString().padStart(2, '0')}</Text>
      <TouchableOpacity style={styles.botao} onPress={pausado ? iniciarCronometro : pausarCronometro}>
        <Text style={styles.textoBotao}>{pausado ? 'Iniciar' : 'Pausar'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={reiniciarCronometro}>
        <Text style={styles.textoBotao}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default Cronometro;