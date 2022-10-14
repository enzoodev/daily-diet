import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import daysOfDietGetAll from "@storage/utils/dayOfDietGetAll";
import { MealListTypeProps } from "src/@types/meal";

type Props = (meal : MealListTypeProps) => Promise<void>;

const mealAndDayOfDiet: Props = async(meal) => {
    try{
        const storedMeals = await daysOfDietGetAll();

        const excludeMeal: MealListTypeProps[] = storedMeals.filter((item: MealListTypeProps) => {
            return item.date !== meal.date;
        })

        const storage: string = JSON.stringify(excludeMeal);
        console.log('see and day');
        /* await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage); */
    }
    catch(error){
        throw error;
    }
}

export default mealAndDayOfDiet;