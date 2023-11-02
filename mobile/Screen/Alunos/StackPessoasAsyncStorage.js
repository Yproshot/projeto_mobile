import { createStackNavigator } from '@react-navigation/stack'
import FormAlunoAsyncStorage from './FormAlunosAsyncStorage.js'
import ListaAlunosAsyncStorage from './ListaAlunosAsyncStorage.js'

const Stack = createStackNavigator()

export default function StackAlunosAsyncStorage() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaAlunosAsyncStorage'
        >

            <Stack.Screen name='ListaAlunosAsyncStorage' component={ListaAlunosAsyncStorage} />

            <Stack.Screen name='FormAlunosAsyncStorage' component={FormAlunoAsyncStorage} />

        </Stack.Navigator>

    )
}
