import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealListTypeProps } from "src/@types/meal";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import daysOfDietGetAll from "@storage/utils/dayOfDietGetAll";

type Props = {
    meal: MealListTypeProps;
    editedMeal: any
}

const mealOfDayOfDiet = async({meal, editedMeal}: Props) => {
    try{
        const storedMeals = await daysOfDietGetAll();

        console.log('meal of a no unique day')
    }
    catch(error){
        throw error;
    }
}

export default mealOfDayOfDiet;