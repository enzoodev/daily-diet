import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { MealTypeProps } from 'src/@types/meal';
import dayOfDietCreate from '@storage/date/dayOfDietCreate';
import MiniHighlight from '@components/MiniHighlight';
import Input from '@components/Input';
import InputMasked from '@components/InputMasked';
import ButtonDiet from '@components/ButtonDiet';
import Button from '@components/Button';
import Modal from '@components/Modal';
import * as S from './styles';

type Props = {
    highlightTitle: string;
    buttonTitle: string;
}

const MealBody = ({ highlightTitle, buttonTitle }: Props) => {
    const [meal, setMeal] = useState<MealTypeProps>({
        title: '',
        meal: '',
        date: '',
        hour: '',
        isInDiet: undefined
    });
    const [viewModal, setViewModal] = useState<boolean>(false);
    const navigation = useNavigation();

    const authenticateData = () => {
        const properties: any[] = Object.values(meal);
        const nullProperties: boolean = properties.filter((item) => item === '' || item === undefined).length > 0;
        const authenticatedDate: boolean = meal.date.length === 10;
        const authenticatedhour: boolean = meal.hour.length === 5;
        const authenticatedData: boolean = !nullProperties && authenticatedDate && authenticatedhour;
        return authenticatedData;
    }

    const handleRegisterMeal = async () => {
        if(!authenticateData()) return setViewModal(true);
        await dayOfDietCreate(meal.date);
        navigation.navigate('feedback', {isInDiet: meal.isInDiet});
    }

    return(
        <S.Container>
            <MiniHighlight
                title={highlightTitle}
                type='DEFAULT'
            />
            <S.Content>
                <S.SubContent>
                    <Input
                        title={'Nome'}
                        maxLength={40}
                        style={{ height: 48 }}
                        value={meal.title}
                        onChangeText={(text) => setMeal(prevState => ({ ...prevState, title: text }))}
                    />
                    <Input
                        title={'Descrição'}
                        multiline={true}
                        textAlignVertical={'top'} /* compatibility for Android */
                        maxLength={220}
                        style={{ height: 120 }}
                        value={meal.meal}
                        onChangeText={(text) => setMeal(prevState => ({ ...prevState, meal: text }))}
                    />
                    <S.MiniContainer>
                        <InputMasked    
                            title={'Data'}
                            type='datetime'
                            options={{ format: 'DD/MM/YYYY' }}
                            value={meal.date}
                            onChangeText={(text) => setMeal(prevState => ({ ...prevState, date: text }))}
                        />
                        <InputMasked
                            title={'Hora'}
                            type='datetime'
                            options={{ format: 'HH:mm' }}
                            value={meal.hour}
                            onChangeText={(text) => setMeal(prevState => ({ ...prevState, hour: text }))}
                        />
                    </S.MiniContainer>
                    <S.HeaderButtonsDiet>
                        Está dentro da dieta?
                    </S.HeaderButtonsDiet>
                    <S.MiniContainer>
                        <ButtonDiet
                            title='Sim'
                            type='PRIMARY'
                            isActive={meal.isInDiet === undefined ? undefined : meal.isInDiet}
                            onPress={() => setMeal(prevState => ({ ...prevState, isInDiet: true}))}
                        />
                        <ButtonDiet
                            title='Não'
                            type='SECONDARY'
                            isActive={meal.isInDiet === undefined ? undefined : !meal.isInDiet}
                            onPress={() => setMeal(prevState => ({ ...prevState, isInDiet: false}))}
                        />
                    </S.MiniContainer>
                </S.SubContent>
                <Button
                    title={buttonTitle}
                    type='DARK'
                    onPress={handleRegisterMeal}
                />
            </S.Content>
            <Modal
                isVisible={viewModal}
                title='Nova Refeição'
                subtitle='Preencha corretamente todos os campos'
                numberOfButtons={1}
                type='DARK'
                buttonTitle='Ok'
                onFunction={() => setViewModal(false)}
            />
        </S.Container>
    )
}

export default MealBody;