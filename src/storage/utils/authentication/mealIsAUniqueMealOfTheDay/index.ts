import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "../../dayOfDietGetAll";

type Props = (meal: MealListTypeProps) => Promise<boolean>;

const mealIsAUniqueMealOfTheDay: Props = async(meal) => {
    try{
        const storedDaysOfDiet = await daysOfDietGetAll();

        const dateOfDaysOfDiet: any = storedDaysOfDiet.find((item: MealListTypeProps) => item.date === meal.date);
        const isMealIsAUniqueMealOfTheDay: boolean = dateOfDaysOfDiet.data.length === 1;

        return isMealIsAUniqueMealOfTheDay;
    }
    catch(error){
        throw error;
    }
}

export default mealIsAUniqueMealOfTheDay;