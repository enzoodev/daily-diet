import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import daysOfDietGetAll from "@storage/utils/dayOfDietGetAll";
import { MealListTypeProps, MealTypeProps } from "src/@types/meal";

type Props = (meal : MealListTypeProps) => Promise<void>;

const mealByDayOfDiet: Props = async(meal) => {
    try{
        const storedMeals = await daysOfDietGetAll();

        const localizeMeal: MealListTypeProps[] = storedMeals.filter((item: MealListTypeProps) => item.date === meal.date);
        const updateDayOfDiet = localizeMeal[0].data.filter((item : MealTypeProps) => {
            console.log(JSON.stringify(item) === JSON.stringify(meal.data[0]));
            console.log(item === meal.data[0]);
        })
/*         console.log(localizeMeal[0].data[0]);
        console.log(meal.data[0]); */

        const excludeMeal: MealListTypeProps[] = storedMeals.map((item : MealListTypeProps) => {
/*             if(item.date === meal.date) */
            return item;
        })

        const storage: string = JSON.stringify(excludeMeal);
        /* await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage); */
    }
    catch(error){
        throw error;
    }
}

export default mealByDayOfDiet;