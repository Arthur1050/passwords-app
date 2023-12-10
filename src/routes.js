import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './pages/home'
import Passwords from './pages/passwords'
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons name='home' size={size} color={"#392de9"} />
                        }
                        return <Ionicons name='home-outline' size={size} color={color} />
                    },
                    tabBarButton: (props) => <TouchableOpacity {...props} />
                }}
            />
            <Tab.Screen 
                name='Senhas'
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons name='lock-closed' size={size} color={"#392de9"} />
                        }
                        return <Ionicons name='lock-closed-outline' size={size} color={color} />
                    },
                    tabBarButton: (props) => <TouchableOpacity {...props} />
                }}
                
            />
        </Tab.Navigator>
    )
}