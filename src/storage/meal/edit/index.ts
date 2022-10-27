import { AppError } from "@utils/AppError/index";
import { MealListTypeProps } from "src/@types/meal";
import mealAlreadyExists from "../../utils/authentication/mealAlreadyExists";
import createNewMeal from "../create";
import deleteMeal from "../delete";

type Props = (meal: MealListTypeProps, mealForEdit: any) => Promise<void>;

const editMeal: Props = async(meal, mealForEdit) => {
    try{
        const isMealAlreadyExists: boolean = await mealAlreadyExists(meal);
        
        if(isMealAlreadyExists)
            throw new AppError('Já existe uma refeição como essa cadastrada');

        await deleteMeal(mealForEdit);
        await createNewMeal(meal);
    }
    catch(error){
        throw error;
    }
}

export default editMeal;