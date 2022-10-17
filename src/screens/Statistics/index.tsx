import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Highlight from '@components/Highlight';
import HighLightStatistics from '@components/HighlightStatistics';
import * as S from './styles';

const Statistics = () => {
    const navigation = useNavigation();
    const handleGoBack = () => navigation.goBack();

    const fetchStatistics: () => Promise<void> = async() => {
        try{
            console.log('testing');
        }
        catch(error){
            console.log(error);
        }
    } 

    useFocusEffect(useCallback(() => {
        fetchStatistics();
    }, []))

    return(
        <S.Container>
            <Highlight
                title={90.86}
                type='PRIMARY'
                icon='arrow-left'
                sideOfIcon='LEFT'
                style={{ height: 168, paddingTop: 20 }}
                onFunction={handleGoBack}
            />
            <S.Content>
                <S.Title>
                    Estatísticas gerais   
                 </S.Title>
                <HighLightStatistics
                    title={22}
                    subtitle='melhor sequência de pratos dentro da dieta'
                    type='DEFAULT'
                    isComplete={true}
                />
                <HighLightStatistics
                    title={109}
                    subtitle='refeições registradas'
                    type='DEFAULT'
                    isComplete={true}
                />
                <S.MiniContainer>
                    <HighLightStatistics
                        title={99}
                        subtitle='refeições dentro da dieta'
                        type='PRIMARY'
                        isComplete={false}
                    />
                    <HighLightStatistics
                        title={10}
                        subtitle='refeições fora da dieta'
                        type='SECONDARY'
                        isComplete={false}
                    />
                </S.MiniContainer>
            </S.Content>
        </S.Container>
    )
}

export default Statistics;