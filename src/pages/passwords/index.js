import { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import PasswordItem from '../../components/passwordItem'

export default function Passwords() {
    const [passwords, setPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    const loadPasswordsList = async () => {
        if (focused) {
            const pass = await getItem('@pass');
    
            console.log(pass);
    
            setPasswords(pass);
        }
    }

    const removePassword = async (value) => {
        const pass = await removeItem('@pass', value);

        removeItem('@pass', pass);
        setPasswords(pass);
    }

    useEffect(() => {
        loadPasswordsList()
    }, [focused])

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Senhas Salvas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{flex: 1}} 
                    data={passwords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <PasswordItem data={item} remove={() => removePassword(item)} />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#392de9',
        paddingLeft: 24,
        paddingBottom: 24,
        paddingTop: 52
    },
    title: {
        color:'#fff',
        fontSize: 24,
        fontWeight: '500'
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16
    }
})