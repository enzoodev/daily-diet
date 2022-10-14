import { MealListTypeProps } from "src/@types/meal";
import mealByDayOfDiet from "./mealByDayOfDiet";
import mealAndDayOfDiet from "./mealAndDayOfDiet";
import mealIsAUniqueMealOfTheDay from "@storage/utils/authentication/mealIsAUniqueMealOfTheDay";

type Props = (meal: MealListTypeProps) => Promise<void>;

const deleteMeal: Props = async(meal) => {
    try{        
        const isMealIsAUniqueMealOfTheDay = await mealIsAUniqueMealOfTheDay(meal);
        if(isMealIsAUniqueMealOfTheDay) return await mealAndDayOfDiet(meal);
        await mealByDayOfDiet(meal);
    }
    catch(error){
        throw error;
    }
}

export default deleteMeal;