import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealListTypeProps } from "src/@types/meal";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import daysOfDietGetAll from "@storage/utils/dayOfDietGetAll";

type Props = {
    meal: MealListTypeProps;
    editedMeal: any;
}

const uniqueMealOfDayOfDiet = async({meal, editedMeal}: Props) => {
    try{
        const storedMeals = await daysOfDietGetAll();

        const storedMealPostEdited: MealListTypeProps[] = storedMeals.map((item: MealListTypeProps) => {
            if(JSON.stringify(item) === JSON.stringify(editedMeal)) {
                if(item.data.length === 1) item = meal;
            }
            return item;
        })
    
        const storage = JSON.stringify(storedMealPostEdited);
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);
    }
    catch(error){
        throw error;
    }
}

export default uniqueMealOfDayOfDiet;