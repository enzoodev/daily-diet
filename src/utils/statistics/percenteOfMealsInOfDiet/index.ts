import { MealListTypeProps } from "src/@types/meal";
import mealsOfDiet from "../mealsOfDiet";
import registredMeals from "../registredMeals";

type Props = (data: MealListTypeProps[]) => any;

const percenteOfMealsInOfDiet: Props = (data) => {
    if(!data.length)
        return '0%';
        
    const registredAllMeals: number = registredMeals(data);
    const mealsInOfDiet: number = mealsOfDiet(data, true);

    const percent: number = ((mealsInOfDiet * 100) / registredAllMeals);

    return percent;
}

export default percenteOfMealsInOfDiet;