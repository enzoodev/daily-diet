import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MealListTypeProps } from 'src/@types/meal';
import daysOfDietGetAll from '@storage/utils/dayOfDietGetAll';
import Highlight from '@components/Highlight';
import HighLightStatistics from '@components/HighlightStatistics';
import * as S from './styles';
import percenteOfMealsInOfDiet from '@utils/statistics/percenteOfMealsInOfDiet';
import maxStreakOfMealsIsInDiet from '@utils/statistics/maxStreakOfMealsIsInDiet';
import registredMeals from '@utils/statistics/registredMeals';
import mealsOfDiet from '@utils/statistics/mealsOfDiet';

type Props = MealListTypeProps;

type StatisticsTypeProps = {
    percenteOfMealsInOfDiet: string;
    maxStreakOfMealsInOutDiet: number;
    registredMeals: number;
    mealsInOfDiet: number;
    mealsOutOfDiet: number;
}

const Statistics = () => {
    const [data, setData] = useState<Props[]>([]);
    const navigation = useNavigation();
    const handleGoBack = () => navigation.goBack();
    
    const statisticsOfMeals: StatisticsTypeProps = {
        percenteOfMealsInOfDiet: percenteOfMealsInOfDiet(data),
        maxStreakOfMealsInOutDiet: maxStreakOfMealsIsInDiet(data),
        registredMeals: registredMeals(data),
        mealsInOfDiet: mealsOfDiet(data, true),
        mealsOutOfDiet: mealsOfDiet(data, false)
    }

    const fetchStatistics: () => Promise<void> = async() => {
        try{
            const fetchData = await daysOfDietGetAll();
            setData(fetchData);
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
                title={statisticsOfMeals.percenteOfMealsInOfDiet}
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
                    title={statisticsOfMeals.maxStreakOfMealsInOutDiet}
                    subtitle='melhor sequência de pratos dentro da dieta'
                    type='DEFAULT'
                    isComplete={true}
                />
                <HighLightStatistics
                    title={statisticsOfMeals.registredMeals}
                    subtitle='refeições registradas'
                    type='DEFAULT'
                    isComplete={true}
                />
                <S.MiniContainer>
                    <HighLightStatistics
                        title={statisticsOfMeals.mealsInOfDiet}
                        subtitle='refeições dentro da dieta'
                        type='PRIMARY'
                        isComplete={false}
                    />
                    <HighLightStatistics
                        title={statisticsOfMeals.mealsOutOfDiet}
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