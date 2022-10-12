import { AppError } from "@utils/AppError";
import { MealListTypeProps } from "src/@types/meal";
import daysOfDietGetAll from "./daysOfDietGetAll";
import CreateNewMealAndDayOfDiet from "./CreateNewMealAndDayOfDiet";
import createNewMealByDayOfDiet from "./createNewMealByDayOfDiet";

type Props = MealListTypeProps;

const createNewMeal = async(newMeal: Props) => {
    try{        
        const storedDaysOfDiet = await daysOfDietGetAll();

        const dayOfDietAlreadyExists = JSON.stringify(storedDaysOfDiet).includes(JSON.stringify(newMeal));
        if(dayOfDietAlreadyExists) throw new AppError('Já existe um grupo cadastrado com esse nome');

        const dateOfDaysOfDiet: string[] = storedDaysOfDiet.map(({ date }: Props) => date);
        const dateOfNewMealAlreadyExists: boolean = dateOfDaysOfDiet.includes(newMeal.date);

        if(dateOfNewMealAlreadyExists) return await createNewMealByDayOfDiet(newMeal);
        await CreateNewMealAndDayOfDiet(newMeal);
    }
    catch(error){
        throw error;
    }
}

export default createNewMeal;