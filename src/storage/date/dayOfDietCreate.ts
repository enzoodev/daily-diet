import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { NewMealTypeProps } from "src/@types/meal";
import { DAYSOFDIET_COLLECTION } from "../storageConfig";
import daysOfDietGetAll from "./daysOfDietGetAll";

type Props = NewMealTypeProps;

const dayOfDietCreate = async (newMeal: Props) => {
    try{        
        const storedDaysOfDiet = await daysOfDietGetAll();

        const dayOfDietAlreadyExists = JSON.stringify(storedDaysOfDiet).includes(JSON.stringify(newMeal));
        const dayOfDietAlreadyExistss = storedDaysOfDiet.includes(newMeal);
        console.log(dayOfDietAlreadyExists)
        console.log(dayOfDietAlreadyExistss)
        if(dayOfDietAlreadyExists) throw new AppError('Já existe um grupo cadastrado com esse nome');

        const storage = JSON.stringify([...storedDaysOfDiet, newMeal]);
/*         await AsyncStorage.setItem(DAYSOFDIET_COLLECTION, storage); */
        console.log(storage);
    }
    catch(error){
        throw error;
    }
}

export default dayOfDietCreate;