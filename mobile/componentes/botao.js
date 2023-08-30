import { Text, View } from "react-native/types"

export default function botao(){
    function executarBotao2(){
        alert('botao 2')
    }
    return (
        <View>
            <Text style={style.texto}>botao</Text>
        </View>
    )
}