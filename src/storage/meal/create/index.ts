import { AppError } from "@utils/AppError/index";
import { MealListTypeProps } from "src/@types/meal";
import mealAlreadyExists from "../../utils/authentication/mealAlreadyExists";
import dateOfDietAlreadyExists from "@storage/utils/authentication/dateOfDietAlreadyExists";
import daysOfDietGetAll from "@storage/utils/dayOfDietGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAYSOFDIET_COLLECTION } from "@storage/config";
import sort from "@storage/utils/sort";

type Props = MealListTypeProps;

const createNewMeal = async(newMeal: Props) => {
    try{        
        let storedMeals = await daysOfDietGetAll();

        const adjustedNewMeal: MealListTypeProps = {
            data: newMeal.data,
            date: newMeal.date.length === 10 ?
            `${newMeal.date.substring(0, 2)}.${newMeal.date.substring(3, 5)}.${newMeal.date.substring(8, 10)}` : newMeal.date
        }

        const isMealAlreadyExists: boolean = await mealAlreadyExists(adjustedNewMeal);
        if(isMealAlreadyExists) 
            throw new AppError('Já existe um grupo cadastrado com esse nome');

        const isDateOfDietAlreadyExists = await dateOfDietAlreadyExists(adjustedNewMeal);

        if(isDateOfDietAlreadyExists){
            const index: number = storedMeals.findIndex((item: MealListTypeProps) => item.date === adjustedNewMeal.date);
            storedMeals[index].data.push(adjustedNewMeal.data[0]);
        }
        else 
            storedMeals.push(adjustedNewMeal);

        const storage: string = JSON.stringify(sort(storedMeals));
        await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage);   
    }
    catch(error){
        throw error;
    }
}

export default createNewMeal;