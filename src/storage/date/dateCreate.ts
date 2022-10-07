import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATE_COLLECTION } from "../storageConfig";
import datesGetAll from "./datesGetAll";

const dateCreate = async (newDate: string) => {
    try{
        const storedDates = await datesGetAll();
        const storage = JSON.stringify([...storedDates, newDate]);
        await AsyncStorage.setItem(DATE_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default dateCreate;