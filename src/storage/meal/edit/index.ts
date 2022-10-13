import dateOfDietAlreadyExists from "@storage/utils/authentication/dateOfDietAlreadyExists";
import { AppError } from "@utils/AppError";
import { MealListTypeProps, MealTypeProps } from "src/@types/meal";
import mealAlreadyExists from "../../utils/authentication/mealAlreadyExists";
import mealOfDayOfDiet from "./mealOfDayOfDiet";
import uniqueMealOfDayOfDiet from "./uniqueMealOfDayOfDiet";

type Props = {
    meal: MealListTypeProps;
    mealForEdit: MealTypeProps | undefined;
    dateOfMealForEdit: string | undefined;
}

const editMeal = async({meal, mealForEdit, dateOfMealForEdit}: Props) => {
    try{
        const isMealAlreadyExists: boolean = await mealAlreadyExists(meal);
        if(isMealAlreadyExists) throw new AppError('Já existe um grupo cadastrado com esse nome');
    
        const editedMeal = {
            date: dateOfMealForEdit,
            data: [mealForEdit]
        }
    
        const isDateOfDietAlreadyExists = await dateOfDietAlreadyExists(meal);
        if(isDateOfDietAlreadyExists) return await uniqueMealOfDayOfDiet({meal, editedMeal})
        await mealOfDayOfDiet({meal, editedMeal});
    }
    catch(error){
        throw error;
    }
}

export default editMeal;