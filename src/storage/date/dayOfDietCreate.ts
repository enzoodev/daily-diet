import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "../storageConfig";
import datesGetAll from "./datesGetAll";

const dayOfDietCreate = async (newDayOfDiet: string) => {
    try{
        const storedDaysOfDiet = await datesGetAll();
        const storage = JSON.stringify([...storedDaysOfDiet, newDayOfDiet]);
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default dayOfDietCreate;