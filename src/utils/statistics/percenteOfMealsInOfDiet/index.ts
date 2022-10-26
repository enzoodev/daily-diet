import { MealListTypeProps } from "src/@types/meal";
import mealsOfDiet from "../mealsOfDiet";
import registredMeals from "../registredMeals";

type Props = (data: MealListTypeProps[]) => string;

const percenteOfMealsInOfDiet: Props = (data) => {
    if(!data.length)
        return '0%';
        
    const registredAllMeals: number = registredMeals(data);
    const mealsInOfDiet: number = mealsOfDiet(data, true);

    const calcOfPercent: string = ((mealsInOfDiet * 100) / registredAllMeals).toFixed(2);
    const percent: string = `${calcOfPercent}%`;

    return percent;
}

export default percenteOfMealsInOfDiet;