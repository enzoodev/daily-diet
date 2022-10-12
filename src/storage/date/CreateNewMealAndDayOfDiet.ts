import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "@storage/storageConfig";
import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "./daysOfDietGetAll";

type Props = MealListTypeProps;

const CreateNewMealAndDayOfDiet = async(newMeal: Props) => {
    try{        
        const storedDaysOfDiet = await daysOfDietGetAll();

        const storage = JSON.stringify([...storedDaysOfDiet, newMeal]);
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default CreateNewMealAndDayOfDiet;