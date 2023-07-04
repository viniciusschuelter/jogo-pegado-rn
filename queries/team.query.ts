import AsyncStorage from "@react-native-async-storage/async-storage";


export const getTeams = async () => {
    const res = await AsyncStorage.getItem('teams');
    return res != null ? JSON.parse(res) : [];
};
