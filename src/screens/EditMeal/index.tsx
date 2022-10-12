import { useRoute } from '@react-navigation/native'
import { MealTypeProps } from 'src/@types/meal';
import MealBody from '@components/MealBody';

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