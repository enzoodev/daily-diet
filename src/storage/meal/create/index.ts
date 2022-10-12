import { AppError } from "@utils/AppError";
import { MealListTypeProps } from "src/@types/meal";
import newMealAndDayOfDiet from "./newMealAndDayOfDiet";
import newMealByDayOfDiet from "./newMelByDayOfDiet";
import mealAlreadyExists from "../../utils/authentication/mealAlreadyExists";
import dateOfDietAlreadyExists from "@storage/utils/authentication/dateOfDietAlreadyExists";

type Props = MealListTypeProps;

const createNewMeal = async(newMeal: Props) => {
    try{        
        const isMealAlreadyExists: boolean = await mealAlreadyExists(newMeal);
        if(isMealAlreadyExists) throw new AppError('Já existe um grupo cadastrado com esse nome');

        const isDateOfDietAlreadyExists = await dateOfDietAlreadyExists(newMeal);
        if(isDateOfDietAlreadyExists) return await newMealByDayOfDiet(newMeal);
        await newMealAndDayOfDiet(newMeal);
    }
    catch(error){
        throw error;
    }
}

export default createNewMeal;