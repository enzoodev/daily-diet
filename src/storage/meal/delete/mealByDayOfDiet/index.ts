import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import daysOfDietGetAll from "@storage/utils/dayOfDietGetAll";
import { MealListTypeProps } from "src/@types/meal";

type Props = MealListTypeProps;

const mealByDayOfDiet = async(meal: Props) => {
    try{
        const storedMeals = await daysOfDietGetAll();
        console.log("meal by day")
    }
    catch(error){
        throw error;
    }
}

export default mealByDayOfDiet;