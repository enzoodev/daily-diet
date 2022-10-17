import dateOfDietAlreadyExists from "@storage/utils/authentication/dateOfDietAlreadyExists";
import { AppError } from "@utils/AppError";
import { MealListTypeProps } from "src/@types/meal";
import mealAlreadyExists from "../../utils/authentication/mealAlreadyExists";

type Props = (meal: MealListTypeProps, mealForEdit?: MealListTypeProps) => Promise<void>;

const editMeal: Props = async(meal, mealForEdit) => {
    try{
        const isMealAlreadyExists: boolean = await mealAlreadyExists(meal);
        if(isMealAlreadyExists) throw new AppError('Já existe um grupo cadastrado com esse nome');
    
        const isDateOfDietAlreadyExists = await dateOfDietAlreadyExists(meal);

        
    }
    catch(error){
        throw error;
    }
}

export default editMeal;