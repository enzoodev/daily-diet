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

        const isMealAlreadyExists: boolean = await mealAlreadyExists(newMeal);
        if(isMealAlreadyExists) throw new AppError('Já existe um grupo cadastrado com esse nome');

        const isDateOfDietAlreadyExists = await dateOfDietAlreadyExists(newMeal);

        if(isDateOfDietAlreadyExists){
            const index: number = storedMeals.findIndex((item: MealListTypeProps) => item.date === newMeal.date);
            storedMeals[index].data.push(newMeal.data[0]);
        }
        else storedMeals.push(newMeal);

        const sortedData: MealListTypeProps[] = sort(storedMeals);
        const storage: string = JSON.stringify(sortedData);
        /* await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage); */
    }
    catch(error){
        throw error;
    }
}

export default createNewMeal;