import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import daysOfDietGetAll from "@storage/utils/dayOfDietGetAll";
import { MealListTypeProps, MealTypeProps } from "src/@types/meal";

type Props = (meal : MealListTypeProps) => Promise<void>;

const mealByDayOfDiet: Props = async(meal) => {
    try{
        const storedMeals = await daysOfDietGetAll();

        const localizeMeal: MealListTypeProps = storedMeals.find((item: MealListTypeProps) => item.date === meal.date);
        const unalteredDaysOfDiet: MealListTypeProps[] = storedMeals.filter((item: MealListTypeProps) => item.date !== meal.date);

        const excludeMeal: MealTypeProps[] = localizeMeal.data.filter((item: MealTypeProps) => {
            return JSON.stringify(item) !== JSON.stringify(meal.data[0]);
        })
        
        const actualizedDayOfDiet: MealListTypeProps[] = [{ date: localizeMeal.date, data: excludeMeal }, ...unalteredDaysOfDiet];

        const storage: string = JSON.stringify(actualizedDayOfDiet);
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default mealByDayOfDiet;