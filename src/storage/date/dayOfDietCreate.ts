import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealListTypeProps } from "src/@types/mealList";
import { DAYSOFDIET_COLLECTION } from "../storageConfig";
import daysOfDietGetAll from "./daysOfDietGetAll";

type Props = MealListTypeProps;

const dayOfDietCreate = async (meal: Props) => {
    try{
        const storedDaysOfDiet = await daysOfDietGetAll();
        const storage = JSON.stringify([...storedDaysOfDiet, meal]);
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default dayOfDietCreate;