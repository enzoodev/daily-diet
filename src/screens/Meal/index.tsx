import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MealTypeProps } from 'src/@types/meal';
import MiniHighlight from '@components/MiniHighlight';
import Description from '@components/Description';
import DietInfo from '@components/DietInfo';
import Button from '@components/Button';
import Modal from '@components/Modal';
import * as S from './styles';

type RouteParams = {
    date: string;
    meal: MealTypeProps;
}

const Meal = () => {
    const [viewModal, setViewModal] = useState<boolean>(false);

    const navigation = useNavigation();
    const route = useRoute();
    const { date, meal } = route.params as RouteParams;

    const handleScreens = {
        yesDeleteMeal: () => navigation.navigate('home'),
        editMeal: () => navigation.navigate('editMeal')
    }

    const handleDeleteMeal = () => {
        setViewModal(true);
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
                        onPress={handleScreens.editMeal}
                    />
                    <Button
                        title='Excluir refeição'
                        type='LIGHT'
                        iconCommunity='trash-can'
                        style={{ marginTop: 10 }}
                        onPress={handleDeleteMeal}
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
                onFunction={() => setViewModal(false)}
                onFunctionTwo={handleScreens.yesDeleteMeal}
            />
        </S.Container>
    )
}

export default Meal;