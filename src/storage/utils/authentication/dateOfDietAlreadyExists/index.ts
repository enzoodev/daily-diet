import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "../../dayOfDietGetAll";

type Props = MealListTypeProps;

const dateOfDietAlreadyExists = async(meal: Props) => {
    try{{
        const storedDaysOfDiet = await daysOfDietGetAll();

        const dateOfDaysOfDiet: string[] = storedDaysOfDiet.map(({ date }: Props) => date);
        const dateOfNewMealAlreadyExists: boolean = dateOfDaysOfDiet.includes(meal.date);
        return dateOfNewMealAlreadyExists;
    }}
    catch(error){
        throw error;
    }
}

export default dateOfDietAlreadyExists;