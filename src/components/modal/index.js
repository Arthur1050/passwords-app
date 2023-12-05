import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

export default function ModalPassword({password}) {
    return <View style={styles.container}>
        <View style={styles.area}>
            <Text>Senha gerada</Text>
            <Pressable>
                <Text>{password}</Text>
            </Pressable>
            <View style={{flexDirection: 'row', gap: 8}}>
                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                    <Text style={[styles.textButton, , {color: '#392de9'}]}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
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
        gap: 16,
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
    }
})