import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    // Buscar itens salvos
    const getItem = async (key) => {
        try {
            const password = await AsyncStorage.getItem(key)

            return JSON.parse(password) || []
        } catch(err) {
            console.log('Erro na busca: ', err);
            return [];
        }
    }

    // Salvar item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);

            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
            
            return passwords;
        } catch(err) {
            console.log('Erro no save: ', err);
        }
    }

    // Remover item do storage
    const removeItem = async (key, value) => {
        try {
            let passwords = await getItem(key);

            passwords = passwords.filter(pass => {
                return pass !== value
            });

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
            
            return passwords;
        } catch(err) {
            console.log('Erro na remoção: ', err);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;