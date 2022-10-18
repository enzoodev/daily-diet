import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { IsInDietTypeProps, MealListTypeProps, MealTypeProps } from 'src/@types/meal';
import daysOfDietGetAll from '@storage/utils/dayOfDietGetAll';
import Highlight from '@components/Highlight';
import HighLightStatistics from '@components/HighlightStatistics';
import * as S from './styles';

type Props = MealListTypeProps;

type StatisticsTypeProps = {
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
        maxStreakOfMealsInOutDiet: 2
        ,
        registredMeals: data.map((item: Props) => {
            return item.data.length
        }).reduce((prev, curr) => prev + curr, 0)
        ,
        mealsInOfDiet: data.map((item: Props) => {
            return item.data.map((item: MealTypeProps) => {
                return item.isInDiet;
            }).filter((item: IsInDietTypeProps) => item === true).length 
        }).reduce((prev, curr) => prev + curr, 0)
        ,
        mealsOutOfDiet: data.map((item: Props) => {
            return item.data.map((item: MealTypeProps) => {
                return item.isInDiet;
            }).filter((item: IsInDietTypeProps) => item === false).length 
        }).reduce((prev, curr) => prev + curr, 0)
    }
    
    const percenteOfMealsInOfDiet: string = `${((statisticsOfMeals.mealsOutOfDiet * 100) / statisticsOfMeals.mealsInOfDiet).toFixed(2)}%`

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
                title={percenteOfMealsInOfDiet}
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