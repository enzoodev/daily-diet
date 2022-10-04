import { useState } from 'react';
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import MiniHighlight from '@components/MiniHighlight';
import Input from '@components/Input';
import InputMasked from '@components/InputMasked';
import * as S from './styles';
import ButtonDiet from '@components/ButtonDiet';
import Button from '@components/Button';

const NewMeal = () => {
    const [isActivedButtonPositive, setIsActivedButtonPositive] = useState<boolean>(false);
    const [isActivedButtonNegative, setIsActivedButtonNegative] = useState<boolean>(false);
    const [isInDiet, setIsInDiet] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [hours, setHours] = useState<string>('');

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleRegisterMeal = () => {
        if(!isActivedButtonPositive && !isActivedButtonNegative) return Alert.alert('Nova refeição', 'A refeição está dentro ou fora da dieta?');
        navigation.navigate('feedback', {isInDiet: isInDiet});
    }

    return(
        <S.Container>
            <MiniHighlight
                title='Nova refeiçãp'
                type='DEFAULT'
                onFunction={handleGoBack}
            />
            <S.Content>
                <Input
                    title={'Nome'}
                    maxLength={40}
                    style={{ height: 48 }}
                    onChangeText={setName}
                    value={name}
                />
               <Input
                    title={'Descrição'}
                    multiline={true}
                    textAlignVertical={'top'} /* compatibility for Android */
                    maxLength={220}
                    style={{ height: 120 }}
                    onChangeText={setDescription}
                    value={description}
                />
                <S.MiniContainer>
                    <InputMasked    
                        title={'Data'}
                        type='datetime'
                        options={{ format: 'DD/MM/YYYY' }}
                        onChangeText={setDate}
                        value={date}
                    />
                    <InputMasked
                        title={'Hora'}
                        type='datetime'
                        options={{ format: 'HH:mm' }}
                        onChangeText={setHours}
                        value={hours}
                    />
                </S.MiniContainer>
                <S.HeaderButtonsDiet>
                    Está dentro da dieta?
                </S.HeaderButtonsDiet>
                <S.MiniContainer>
                    <ButtonDiet
                        title='Sim'
                        type='PRIMARY'
                        isActive={isActivedButtonPositive}
                        onPress={() => {
                            setIsActivedButtonPositive(!isActivedButtonPositive)
                            if(isActivedButtonNegative) setIsActivedButtonNegative(false)
                            setIsInDiet(true);
                        }}
                    />
                    <ButtonDiet
                        title='Não'
                        type='SECONDARY'
                        isActive={isActivedButtonNegative}
                        onPress={() => {
                            setIsActivedButtonNegative(!isActivedButtonNegative)
                            if(isActivedButtonPositive) setIsActivedButtonPositive(false)
                            setIsInDiet(false);
                        }}
                    />
                </S.MiniContainer>
                <Button
                    title='Cadastrar refeição'
                    style={{ position: 'absolute', bottom: 0, left: 24 }}
                    onPress={handleRegisterMeal}
                />
            </S.Content>
        </S.Container>
    )
}

export default NewMeal;