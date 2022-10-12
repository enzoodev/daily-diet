import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "../../../utils/dayOfDietGetAll";

type Props = MealListTypeProps;

const newMealAndDayOfDiet = async(newMeal: Props) => {
    try{        
        const storedDaysOfDiet = await daysOfDietGetAll();

        const storage = JSON.stringify([...storedDaysOfDiet, newMeal]);
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default newMealAndDayOfDiet;