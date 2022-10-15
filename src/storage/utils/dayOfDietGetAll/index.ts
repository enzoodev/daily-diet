import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealListTypeProps } from "src/@types/meal";
import { DAYSOFDIET_COLLECTION } from "../../config";

type Props = () => Promise<any>;

const daysOfDietGetAll: Props = async () => {
    try{
        const storage = await AsyncStorage.getItem(DAYSOFDIET_COLLECTION);
        const daysOfDiet: MealListTypeProps[] | null[] = storage ? JSON.parse(storage) : [];
        return daysOfDiet;
    }
    catch(error){
        throw error;
    }
}

export default daysOfDietGetAll;