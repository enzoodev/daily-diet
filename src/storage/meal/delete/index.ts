import { AppError } from "@utils/AppError";
import { MealListTypeProps } from "src/@types/meal";
import mealAlreadyExists from "../../utils/authentication/mealAlreadyExists";
import dateOfDietAlreadyExists from "@storage/utils/authentication/dateOfDietAlreadyExists";
import mealByDayOfDiet from "./mealByDayOfDiet";
import mealAndDayOfDiet from "./mealAndDayOfDiet";

type Props = MealListTypeProps;

const deleteMeal = async(meal: Props) => {
    try{        
        const isDateOfDietAlreadyExists = await dateOfDietAlreadyExists(meal);
        if(isDateOfDietAlreadyExists) return await mealByDayOfDiet(meal);
        await mealAndDayOfDiet(meal);
    }
    catch(error){
        throw error;
    }
}

export default deleteMeal;