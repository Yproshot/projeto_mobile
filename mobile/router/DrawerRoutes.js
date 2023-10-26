
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../Screen/Home'
import ListaCarros from '../Screen/ListaCarros/ListaCarros'
import StackPessoas from '../Screen/Pessoas/StackPessoas'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Pessoas'>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="CarrosAsyncStorage" component={ListaCarros} />
            <Drawer.Screen name="Pessoas" component={StackPessoas} />

        </Drawer.Navigator>

    )
}