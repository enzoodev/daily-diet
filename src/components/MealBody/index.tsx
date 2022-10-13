import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { MealListTypeProps, MealTypeProps } from 'src/@types/meal';
import { AuthenticateDataTypeProps } from 'src/@types/authenticateData';
import { AppError } from '@utils/AppError';
import createNewMeal from '@storage/meal/create';
import editMeal from '@storage/meal/edit';
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
    typeOfFuntion: 'ADD' | 'EDIT';
    mealForEdit?: MealTypeProps;
    dateOfMealForEdit?: string;
}

const MealBody = ({ highlightTitle, buttonTitle, typeOfFuntion, mealForEdit, dateOfMealForEdit }: Props) => {
    const [meal, setMeal] = useState<MealListTypeProps>({
        date: dateOfMealForEdit ? dateOfMealForEdit : '',
        data: mealForEdit ?
        [{
            title: mealForEdit.title,
            meal: mealForEdit.meal,
            hour: mealForEdit.hour,
            isInDiet: mealForEdit.isInDiet
        }] : [{
            title: '',
            meal: '',
            hour: '',
            isInDiet: undefined
        }]
    });
    
    const [viewModal, setViewModal] = useState<boolean>(false);
    const [subtitleModal, setSubtitleModal] = useState<string>('');
    const navigation = useNavigation();

    const authenticateData = () => {
        const authenticate: AuthenticateDataTypeProps = {
            date: meal.date.length === 10,
            hour: meal.data[0].hour.length === 5,
            title: meal.data[0].title.trim().length > 0,
            meal: meal.data[0].meal.trim().length > 0,
            isInDiet: meal.data[0].isInDiet !== undefined
        }
        const unauthenticatedData: boolean[] = Object.values(authenticate).filter((item) => item === false);
        const authenticatedData: boolean = unauthenticatedData.length === 0;     
        return authenticatedData;
    }

    const handleRegisterMeal = async() => {
        try{
            if(authenticateData()) {
                typeOfFuntion === 'ADD' ? await createNewMeal(meal) : await editMeal({meal, mealForEdit, dateOfMealForEdit});
                navigation.navigate('feedback', {isInDiet: meal.data[0].isInDiet});
            }
            else{
                setViewModal(true);
                setSubtitleModal('Preencha corretamente todos os campos');
            }
        }
        catch(error){
            setSubtitleModal(error instanceof AppError ? error.message : 'Não foi possível cadastrar a refeição');
            setViewModal(true);
        }
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
                        value={meal.data[0].title}
                        onChangeText={(text) => setMeal({ date: meal.date, data: [{...meal.data[0], title: text}] })}
                    />
                    <Input
                        title={'Descrição'}
                        multiline={true}
                        textAlignVertical={'top'} /* compatibility for Android */
                        maxLength={220}
                        style={{ height: 120 }}
                        value={meal.data[0].meal}
                        onChangeText={(text) => setMeal({ date: meal.date, data: [{...meal.data[0], meal: text}] })}
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
                            value={meal.data[0].hour}
                            onChangeText={(text) => setMeal({ date: meal.date, data: [{...meal.data[0], hour: text}] })}
                        />
                    </S.MiniContainer>
                    <S.HeaderButtonsDiet>
                        Está dentro da dieta?
                    </S.HeaderButtonsDiet>
                    <S.MiniContainer>
                        <ButtonDiet
                            title='Sim'
                            type='PRIMARY'
                            isActive={meal.data[0].isInDiet === undefined ? undefined : meal.data[0].isInDiet}
                            onPress={() => setMeal({ date: meal.date, data: [{...meal.data[0], isInDiet: true}] })}
                        />
                        <ButtonDiet
                            title='Não'
                            type='SECONDARY'
                            isActive={meal.data[0].isInDiet === undefined ? undefined : !meal.data[0].isInDiet}
                            onPress={() => setMeal({ date: meal.date, data: [{...meal.data[0], isInDiet: false}] })}
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
                subtitle={subtitleModal}
                numberOfButtons={1}
                type='DARK'
                buttonTitle='Ok'
                onFunction={() => setViewModal(false)}
            />
        </S.Container>
    )
}

export default MealBody;