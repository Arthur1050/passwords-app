import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clippboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export default function ModalPassword({password, modalClose}) {
    const { saveItem } = useStorage();
    
    const copyPassword = async () => {
        await Clippboard.setStringAsync(password)
        alert("Senha copiada para area de transferencia.")

        await savePassword();
    }

    const savePassword = async () => {
        await saveItem('@pass', password)

        modalClose()
    }

    return <View style={styles.container}>
        <View style={styles.area}>
            <Text>Senha gerada</Text>
            <Pressable onPress={copyPassword} >
                <Text style={styles.passwordText}>{password}</Text>
            </Pressable>
            <View style={{flexDirection: 'row', gap: 8}}>
                <TouchableOpacity onPress={modalClose} style={[styles.button, styles.buttonSecondary]}>
                    <Text style={[styles.textButton, , {color: '#392de9'}]}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={savePassword}>
                    <Text style={[styles.textButton, {color: '#f4f4f4'}]}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    area: {
        backgroundColor: '#f4f4f4',
        width: '85%',
        borderRadius: 16,
        alignItems: 'center',
        gap: 48,
        padding: 16
    },
    button: {
        flex: 1,
        borderWidth: 1,
        alignItems: "center",
        padding: 12,
        borderRadius: 8
    },
    buttonPrimary: {
        backgroundColor: '#392de9',
        borderColor: '#392de9',
    },
    buttonSecondary: {
        backgroundColor: 'transparent',
        borderColor: '#392de9',
    },
    textButton: {
        fontSize: 16,
        fontWeight: '600'
    },
    passwordText: {
        fontSize: 24,
        fontWeight: "600",
        color: "#392de9",
        textAlign: "center"
    }
})