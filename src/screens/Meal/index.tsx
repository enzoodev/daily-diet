import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MealListTypeProps, MealTypeProps } from 'src/@types/meal';
import MiniHighlight from '@components/MiniHighlight';
import Description from '@components/Description';
import DietInfo from '@components/DietInfo';
import Button from '@components/Button';
import Modal from '@components/Modal';
import * as S from './styles';
import deleteMeal from '@storage/meal/delete';

type RouteParams = {
    date: string;
    meal: MealTypeProps;
}

type EditMealTypeProps = (date: string, item: MealTypeProps) => void;

type DeleteMealTypeProps = {
    init: () => void;
    no: () => void;
    yes: () => Promise<void>;
}

const Meal = () => {
    const [viewModal, setViewModal] = useState<boolean>(false);

    const navigation = useNavigation();
    const route = useRoute();
    const { date, meal } = route.params as RouteParams;

    const mealForDelete: MealListTypeProps = {
        date: date,
        data: [meal]
    }

    const handleEditMeal: EditMealTypeProps = (date, item) => {
        navigation.navigate('editMeal', {date: date, meal: item});
    }

    const handleDeleteMeal: DeleteMealTypeProps = {
        init: () => setViewModal(true),
        no: () => setViewModal(false),
        yes: async() => {
            try{
                await deleteMeal(mealForDelete);
                /* navigation.navigate('home'); */
            }
            catch(error){
                console.log(error);
            }
        }
    }

    return(
        <S.Container>
            <MiniHighlight
                title='Refeição'
                type='PRIMARY'
            />
            <S.Content>
                <S.SubContent>
                    <Description
                        title={meal.title}
                        subtitle={meal.meal}
                        date={date}
                        hour={meal.hour}
                    />
                    <DietInfo
                        isInDiet={meal.isInDiet}
                    />
                </S.SubContent>
                <S.SubContent>
                    <Button
                        title='Editar refeição'
                        type='DARK'
                        iconCommunity='lead-pencil'
                        onPress={() => handleEditMeal(date, meal)}
                    />
                    <Button
                        title='Excluir refeição'
                        type='LIGHT'
                        iconCommunity='trash-can'
                        style={{ marginTop: 10 }}
                        onPress={handleDeleteMeal.init}
                    />
                </S.SubContent>
            </S.Content>
            <Modal
                isVisible={viewModal}
                title='Refeição'
                subtitle='Deseja realmente excluir o registro da refeição?'
                numberOfButtons={2}
                type='LIGHT'
                typeTwo='DARK'
                buttonTitle='Cancelar'
                buttonTitleTwo='Sim, excluir'
                onFunction={handleDeleteMeal.no}
                onFunctionTwo={handleDeleteMeal.yes}
            />
        </S.Container>
    )
}

export default Meal;