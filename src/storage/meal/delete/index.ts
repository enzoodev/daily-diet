import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealListTypeProps, MealTypeProps } from "src/@types/meal";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import daysOfDietGetAll from "@storage/utils/dayOfDietGetAll";
import mealIsAUniqueMealOfTheDay from "@storage/utils/authentication/mealIsAUniqueMealOfTheDay";

type Props = (meal: MealListTypeProps) => Promise<void>;

const deleteMeal: Props = async(meal) => {
    try{        
        let storedMeals = await daysOfDietGetAll();

        const indexOfTheExcludedMeal: number = storedMeals.findIndex((item: MealListTypeProps) => item.date === meal.date);
        const isMealIsAUniqueMealOfTheDay: boolean = await mealIsAUniqueMealOfTheDay(meal);

        if(isMealIsAUniqueMealOfTheDay) {
            storedMeals = storedMeals.filter((item: MealListTypeProps) => {
                return item.date !== meal.date;
            })
        }
        else{
            storedMeals[indexOfTheExcludedMeal].data =
            storedMeals[indexOfTheExcludedMeal].data
            .filter((item: MealTypeProps) => {
                return JSON.stringify(item) !== JSON.stringify(meal.data[0]);
            })    
        }

        const storage: string = JSON.stringify(storedMeals);
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default deleteMeal;