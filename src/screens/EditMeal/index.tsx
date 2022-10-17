import { useRoute } from '@react-navigation/native'
import MealBody from '@components/MealBody';
import { MealListTypeProps } from 'src/@types/meal';

type RouteParams = {
    meal: MealListTypeProps
}

const EditMeal = () => {
    const route = useRoute();
    const { meal } = route.params as RouteParams;

    return(
        <MealBody
            highlightTitle='Editar refeição'
            buttonTitle='Salvar alterações'
            typeOfFuntion='EDIT'
            mealForEdit={meal}
        />
    )
}

export default EditMeal;