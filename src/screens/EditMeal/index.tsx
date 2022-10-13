import { useRoute } from '@react-navigation/native'
import MealBody from '@components/MealBody';
import { MealTypeProps } from 'src/@types/meal';

type RouteParams = {
    date: string;
    meal: MealTypeProps;
}

const EditMeal = () => {
    const route = useRoute();
    const { date, meal } = route.params as RouteParams;

    return(
        <MealBody
            highlightTitle='Editar refeição'
            buttonTitle='Salvar alterações'
            typeOfFuntion='EDIT'
            mealForEdit={meal}
            dateOfMealForEdit={date}
        />
    )
}

export default EditMeal;