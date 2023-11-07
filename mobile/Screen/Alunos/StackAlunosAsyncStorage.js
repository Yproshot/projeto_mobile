import { createStackNavigator } from '@react-navigation/stack'
import ListaAlunosAsyncStorage from './ListaAlunosAsyncStorage.js'
import FormAlunoAsyncStorager from './FormAlunosAsyncStorage.js'

const Stack = createStackNavigator()

export default function StackAlunosAsyncStorage() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaAlunosAsyncStorage'
        >

            <Stack.Screen name='ListaAlunosAsyncStorage' component={ListaAlunosAsyncStorage} />

            <Stack.Screen name='FormAlunosAsyncStorage' component={FormAlunoAsyncStorager} />

        </Stack.Navigator>

    )
}
