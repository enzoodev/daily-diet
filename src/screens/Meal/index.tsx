import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MealListTypeProps } from 'src/@types/meal';
import MiniHighlight from '@components/MiniHighlight';
import Description from '@components/Description';
import DietInfo from '@components/DietInfo';
import Button from '@components/Button';
import Modal from '@components/Modal';
import * as S from './styles';
import deleteMeal from '@storage/meal/delete';

type RouteParams = {
    meal: MealListTypeProps;
}

type HandleMealTypeProps = {
    edit: () => void;
    delete: {
        init: () => void;
        no: () => void;
        yes: () => Promise<void>;
    }
}

const Meal = () => {
    const [viewModal, setViewModal] = useState<boolean>(false);
    const navigation = useNavigation();
    const route = useRoute();
    const { meal } = route.params as RouteParams;

    const handleMeal: HandleMealTypeProps = {
        edit: () => navigation.navigate('editMeal', {meal: meal}),
        delete : {
            init: () => setViewModal(true),
            no: () => setViewModal(false),
            yes: async() => {
                try{
                    await deleteMeal(meal);
                    /* navigation.navigate('home'); */
                }
                catch(error){
                    console.log(error);
                }
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
                        title={meal.data[0].title}
                        subtitle={meal.data[0].meal}
                        date={meal.date}
                        hour={meal.data[0].hour}
                    />
                    <DietInfo
                        isInDiet={meal.data[0].isInDiet}
                    />
                </S.SubContent>
                <S.SubContent>
                    <Button
                        title='Editar refeição'
                        type='DARK'
                        iconCommunity='lead-pencil'
                        onPress={handleMeal.edit}
                    />
                    <Button
                        title='Excluir refeição'
                        type='LIGHT'
                        iconCommunity='trash-can'
                        style={{ marginTop: 10 }}
                        onPress={handleMeal.delete.init}
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
                onFunction={handleMeal.delete.no}
                onFunctionTwo={handleMeal.delete.yes}
            />
        </S.Container>
    )
}

export default Meal;