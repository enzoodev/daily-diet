import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "../../dayOfDietGetAll";
import dateOfDietAlreadyExists from "../dateOfDietAlreadyExists";
import mealIsAUniqueMealOfTheDay from "../mealIsAUniqueMealOfTheDay";

type Props = (meal: MealListTypeProps) => Promise<boolean>;

const mealAlreadyExists: Props = async(meal) => {
    try{
        const storedMeals = await daysOfDietGetAll();
        let isMealAlreadyExists: boolean;

        const index: number = storedMeals.findIndex((item: MealListTypeProps) => item.date === meal.date);
        const isDateOfDietAlreadyExists = await dateOfDietAlreadyExists(meal);

        if(isDateOfDietAlreadyExists){
            const isMealIsAUniqueMealOfTheDay: boolean = await mealIsAUniqueMealOfTheDay(meal);

            if(isMealIsAUniqueMealOfTheDay) isMealAlreadyExists = JSON.stringify(storedMeals).includes(JSON.stringify(meal));
            else isMealAlreadyExists =
            storedMeals[index].date === meal.date && 
            JSON.stringify(storedMeals[index].data).includes(JSON.stringify(meal.data[0]));
        }
        else isMealAlreadyExists = false;

        return isMealAlreadyExists;
    }
    catch(error){
        throw error;
    }
}

export default mealAlreadyExists;