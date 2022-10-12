import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "../../dayOfDietGetAll";

type Props = MealListTypeProps;

const mealAlreadyExists = async(meal: Props) => {
    try{
        const storedMeals: string = JSON.stringify(await daysOfDietGetAll());

        const isMealAlreadyExists: boolean = storedMeals.includes(JSON.stringify(meal));
        return isMealAlreadyExists;
    }
    catch(error){
        throw error;
    }
}

export default mealAlreadyExists;