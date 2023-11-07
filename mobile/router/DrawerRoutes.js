
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../Screen/Home'
import ListaCarros from '../Screen/ListaCarros/ListaCarros'
import StackPessoas from '../Screen/Pessoas/StackPessoas'
import ListaAlunosAsyncStorage from '../Screen/Alunos/ListaAlunosAsyncStorage'
import ListaAlunos from '../Screen/Alunoscrud/ListaAlunos'
import ListaTarefasAsync from '../Screen/ListaCarros/ListaCarrosAsyncStorage'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Pessoas'>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="CarrosAsyncStorage" component={ListaCarros} />
            <Drawer.Screen name="Pessoas" component={StackPessoas} />
            <Drawer.Screen name="AlunosAsyncStorage" component={ListaAlunosAsyncStorage} />
            <Drawer.Screen name="Alunoscrud" component={ListaAlunos} />
            <Drawer.Screen name="lista De Tarefas" component={ListaTarefasAsync} />

        </Drawer.Navigator>

    )
}