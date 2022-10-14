import { MealListTypeProps, MealTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "../../dayOfDietGetAll";

type Props = (meal: MealListTypeProps) => Promise<boolean>;

const mealIsAUniqueMealOfTheDay: Props = async(meal) => {
    try{{
        const storedDaysOfDiet = await daysOfDietGetAll();

        const dateOfDaysOfDiet: MealListTypeProps[] = storedDaysOfDiet.filter(( item: MealListTypeProps) => item.date === meal.date);
        const isMealIsAUniqueMealOfTheDay = dateOfDaysOfDiet[0].data.length === 1;

        return isMealIsAUniqueMealOfTheDay;
    }}
    catch(error){
        throw error;
    }
}

export default mealIsAUniqueMealOfTheDay;