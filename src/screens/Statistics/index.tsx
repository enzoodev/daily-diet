import { useNavigation, useRoute } from '@react-navigation/native';
import { MealListTypeProps } from 'src/@types/meal';
import Highlight from '@components/Highlight';
import HighLightStatistics from '@components/HighlightStatistics';
import * as S from './styles';

type Props = {
    percenterOfMealsInOutDiet: number;
    maxStreakOfMealsInOutDiet: number;
    registredMeals: number;
    mealsInOfDiet: number;
    mealsOutOfDiet: number;
}

type RouteParams = {
    meal: MealListTypeProps[];
}

const Statistics = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { meal } = route.params as RouteParams;
    const handleGoBack = () => navigation.goBack();

    const statisticsOfMeals: Props = {
        percenterOfMealsInOutDiet: 1,
        maxStreakOfMealsInOutDiet: 2,
        registredMeals: 3,
        mealsInOfDiet: 4,
        mealsOutOfDiet: 5 
    }

    return(
        <S.Container>
            <Highlight
                title={statisticsOfMeals.percenterOfMealsInOutDiet}
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