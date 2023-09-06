import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BiscoitoDaSorte(){

const [Mensagem, SetMensagem] = useState("");
const [quebrado, Setquebrado] = useState(false);

const Mensagens = [
  "Grande é aquele que não perdeu a candura da infância",
  "Os anos ensinam muitas coisas que os dias desconhecem",
  "Seu coração é puro, sua mente clara e sua alma piedosa",
  "Seja firme, paciente, simples e natural, assim estará perto da virtude",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiveres paciência.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Não há que ser forte. Há que ser flexível.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vai mais longe do que muito conhecimento.",
  "Quem quer colher rosas deve suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.",
  "Gente todo dia arruma os cabelos, por que não o coração?",
  "Há três coisas que jamais voltam, a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.",
  "É mais fácil conseguir o perdão do que a permissão.",
  "Uma bela flor é incompleta sem suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "Não há melhor negócio que a vida. A gente há obtém a troco de nada.",
  "O riso é a menor distância entre duas pessoas.",
  "Se você se sente só é porque construiu muros ao invés de pontes.",
  "Vencer é 90 por cento suor e 40 por cento técnica.",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
  "Você pode encontrar a si mesmo fazendo ou dizendo coisas que você nunca imaginou possíveis.",
  "A sorte favorece a mente bem preparada.",
  "Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração.",
  "Quem olha para fora sonha, quem olha para dentro acorda.",
  "As pessoas se esquecerão do que você disse e do que você fez… mas nunca se esquecerão de como você as fez sentir.",
  "O amor está mais próximo do que você imagina.",
  "A vida coloca em nossa frente opções.",
  "Deixe de lado as preocupações e seja feliz.",
  "A vontade das pessoas é a melhor das leis.",
  "Nós somos o que pensamos."
];

const BiscoitoQuebrado = () => {
  if (!quebrado){
    const RandomIndex = Math.floor(Math.random()*Mensagens.length);
    SetMensagem(Mensagens[RandomIndex]);
    Setquebrado(true);
  }
};

const ReiniciarBiscoito = () => {
  SetMensagem("");
  Setquebrado(false);
};
  return (
    <View style={styles.container}>
      {quebrado ? (
        <Image
          style={styles.imagem}
          source={require("../assets/BISCOITO_ABERTO.png")}
        />
      ) : (
        <Image
          style={styles.imagem}
          source={require("../assets/BISCOITO.png")}
        />
      )}
      <View style={styles.container}>
        <Text style={styles.textofrase}>{Mensagem}</Text>
      </View>
      <TouchableOpacity
        onPress={BiscoitoQuebrado}
        style={styles.botao}
        disabled={quebrado}
      >
        <Text style={{ color: "white" }}>Quebrar o Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ReiniciarBiscoito}
        style={styles.botao}
        disabled={!quebrado}
      >
        <Text style={{ color: "white" }}>Reiniciar o Biscoito</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    fontSize: 30,
    color: "white",
  },

  textofrase: {
    fontSize: 20,
    fontStyle: "italic",
    color: "blue",
  },

  imagem: {
    marginTop: 100,
  },

  botao: {
    backgroundColor: "blue",
    marginBottom: 50,
    padding: 10,
    borderRadius: 8,
  },
});