import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PasswordItem({ data, remove }) {
    return (
        <Pressable style={styles.item} onLongPress={remove}>
            <Text style={styles.text}>
                {data}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#0e0e0e',
        marginVertical: 4,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    text: {
        color: '#fff',
        fontWeight: '600'
    }
})