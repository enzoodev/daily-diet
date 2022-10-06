import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MiniHighlight from '@components/MiniHighlight';
import Description from '@components/Description';
import DietInfo from '@components/DietInfo';
import Button from '@components/Button';
import * as S from './styles';
import Modal from '@components/Modal';

const Meal = () => {
    const [viewModal, setViewModal] = useState<boolean>(false);

    const navigation = useNavigation();

    const handleDeleteMeal = () => {
        navigation.navigate('home');
    }
    
    const handleButtonEditMeal = () => {
        navigation.navigate('editMeal');
    }

    const handleButtonDeleteMeal = () => {
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
                        title='Sanduíche'
                        subtitle='Sanduíche de pao integral com atum e salada de alface e tomate'
                        date='05/10/2022'
                        hour='06:49'
                    />
                    <DietInfo
                        isInDiet={true}
                    />
                </S.SubContent>
                <S.SubContent>
                    <Button
                        title='Editar refeição'
                        type='DARK'
                        iconCommunity='lead-pencil'
                        onPress={handleButtonEditMeal}
                    />
                    <Button
                        title='Excluir refeição'
                        type='LIGHT'
                        iconCommunity='trash-can'
                        style={{ marginTop: 10 }}
                        onPress={handleButtonDeleteMeal}
                    />
                </S.SubContent>
            </S.Content>
            <Modal
                isVisible={viewModal}
                title='Deseja realmente excluir o registro da refeição?'
                numberOfButtons={2}
                type='LIGHT'
                typeTwo='DARK'
                buttonTitle='Cancelar'
                buttonTitleTwo='Sim, excluir'
                onFunction={() => setViewModal(false)}
                onFunctionTwo={handleDeleteMeal}
            />
        </S.Container>
    )
}

export default Meal;