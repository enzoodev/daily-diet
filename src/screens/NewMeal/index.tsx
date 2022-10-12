import MealBody from '@components/MealBody';

const NewMeal = () => {
    return(
        <MealBody
            highlightTitle='Nova refeição'
            buttonTitle='Cadastrar refeição'
            typeOfFuntion='ADD'
        />
    )
}

export default NewMeal;