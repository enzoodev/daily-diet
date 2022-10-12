import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "@storage/storageConfig";
import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "./daysOfDietGetAll";

type Props = MealListTypeProps;

const createNewMealByDayOfDiet = async(newMeal: Props) => {
    try{
        const storedMeals = await daysOfDietGetAll();

        const addNewMeal: Props[] = storedMeals.map((item: Props) => {
            if(item.date === newMeal.date) item.data = [...item.data, newMeal.data[0]];
            return item;
        })
    
        const storage = JSON.stringify(addNewMeal);
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default createNewMealByDayOfDiet;