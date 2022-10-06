import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import MealBody from '@components/MealBody';

const NewMeal = () => {


    return(
        <MealBody
            buttonTitle='Salvar alterações'
        />
    )
}

export default NewMeal;