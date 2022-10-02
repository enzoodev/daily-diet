import { useState, useEffect } from 'react';
import MiniHighlight from '@components/MiniHighlight';
import Input from '@components/Input';
import InputMasked from '@components/InputMasked';
import * as S from './styles';

const NewMeal = () => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [hours, setHours] = useState<string>('');

    useEffect(() => {
        console.log(date);
    }, [date]);

    return(
        <S.Container>
            <MiniHighlight
                title='Nova refeição'
                type='DEFAULT'
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
                        maxLength={10}
                        onChangeText={setDate}
                        value={date}
                    />
                    <InputMasked
                        title={'Hora'}
                        type='datetime'
                        options={{ format: 'HH:mm' }}
                        maxLength={5}
                        onChangeText={setHours}
                        value={hours}
                    />
                </S.MiniContainer>
            </S.Content>
        </S.Container>
    )
}

export default NewMeal;