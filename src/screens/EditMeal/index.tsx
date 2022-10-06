import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import MealBody from '@components/MealBody';

const EditMeal = () => {

    return(
        <MealBody
            highlightTitle='Editar refeição'
            buttonTitle='Salvar alterações'
        />
    )
}

export default EditMeal;