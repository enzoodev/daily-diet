import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SectionList } from 'react-native';
import { MealTypeProps } from 'src/@types/meal';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import ListItem from '@components/ListItem';
import ListHeader from '@components/ListHeader';
import ListEmpty from '@components/ListEmpty';
import * as S from './styles';

type Props = {
    title: string;
    data: MealTypeProps[];
}

const Home = () => {
    const [list, setList] = useState<Props[]>([
/*         {
            title: '29.09.2022', 
            data: [
                {hour: '08:00', title: 'refeição 1', meal: 'descrição da refeição', isCorrect: true},
                {hour: '13:00', title: 'refeição 2', meal: 'descrição da refeição', isCorrect: true},
                {hour: '19:00', title: 'refeição 3', meal: 'descrição da refeição', isCorrect: true}
            ]
        } */
    ]);

    const navigation = useNavigation();

    const handleNewMeal = () => {
        navigation.navigate('newMeal');
    }

    const handleStatistics = () => {
        navigation.navigate('statistics');
    }

    const handleGoToMeal = () => {
        navigation.navigate('meal');
    }

    return(
        <S.Container>
            <Header />
            <Highlight
                title={90.86}
                type='PRIMARY'
                icon='arrow-top-right'
                sideOfIcon='RIGHT'
                style={{ height: 102 }}
                onFunction={handleStatistics}
            />
            <S.ContentButton>
                <S.TitleContentButton>
                    Refeições
                </S.TitleContentButton>
                <Button
                    title='Nova refeição'
                    icon='add'
                    type='DARK'
                    onPress={handleNewMeal}
                />
            </S.ContentButton>
           <SectionList
                sections={list}
                keyExtractor={(item, index) => item.hour + index}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        meal={item.meal}
                        date={item.date}
                        hour={item.hour}
                        isCorrect={item.isCorrect}
                        onPress={handleGoToMeal}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <ListHeader
                        title={title}
                    />
                )}
                ListEmptyComponent = {() => (
                    <ListEmpty
                        message='Adicione as refeições diárias'
                    />
                )}
                stickySectionHeadersEnabled={false}
                showsVerticalScrollIndicator={false}
            />
        </S.Container>
    )
} 

export default Home;