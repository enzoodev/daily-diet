import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "../storageConfig";

const daysOfDietGetAll = async () => {
    try{
        const storage = await AsyncStorage.getItem(DAYSOFDIET_COLLECTION);
        const daysOfDiet: string = storage ? JSON.parse(storage) : [];
        return daysOfDiet;
    }
    catch(error){
        throw error;
    }
}

export default daysOfDietGetAll;