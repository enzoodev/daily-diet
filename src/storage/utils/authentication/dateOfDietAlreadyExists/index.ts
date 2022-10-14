import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "../../dayOfDietGetAll";

type Props = (meal: MealListTypeProps) => Promise<boolean>;

const dateOfDietAlreadyExists: Props = async(meal) => {
    try{{
        const storedDaysOfDiet = await daysOfDietGetAll();

        const dateOfDaysOfDiet: string[] = storedDaysOfDiet.map(({ date }: any) => date);
        const dateOfNewMealAlreadyExists: boolean = dateOfDaysOfDiet.includes(meal.date);

        return dateOfNewMealAlreadyExists;
    }}
    catch(error){
        throw error;
    }
}

export default dateOfDietAlreadyExists;