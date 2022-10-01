import { useState } from 'react';
import { SectionList } from 'react-native';
import { MealTypeProps } from 'src/@types/meal';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import ContentButton from '@components/ContentButton';
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
        {
            title: '29.09.2022', 
            data: [
                {hours: '08:00', meal: 'refeição 1', isCorrect: true},
                {hours: '13:00', meal: 'refeição 2', isCorrect: true},
                {hours: '19:00', meal: 'refeição 3', isCorrect: true}
            ]
        },
        {
            title: '28.09.2022', 
            data: [
                {hours: '08:00', meal: 'refeição 1', isCorrect: true},
                {hours: '13:00', meal: 'refeição 2', isCorrect: true},
                {hours: '19:00', meal: 'refeição 3', isCorrect: true}
            ]
        },
        {
            title: '27.09.2022', 
            data: [
                {hours: '08:00', meal: 'refeição 1', isCorrect: true},
                {hours: '13:00', meal: 'refeição 2', isCorrect: true},
                {hours: '19:00', meal: 'refeição 3', isCorrect: true}
            ]
        },
        {
            title: '26.09.2022', 
            data: [
                {hours: '08:00', meal: 'refeição 1', isCorrect: true},
                {hours: '13:00', meal: 'refeição 2', isCorrect: true},
                {hours: '19:00', meal: 'refeição 3', isCorrect: true}
            ]
        }
    ]);

    return(
        <S.Container>
            <Header />
            <Highlight
                title={90.86}
                type='PRIMARY'
                icon='arrow-top-right'
                sideOfIcon='RIGHT'
                style={{ height: 102 }}
            />
            <ContentButton
                contentTitle='Refeições'
                title='Nova refeição'
                icon='add'
            />
           <SectionList
                sections={list}
                keyExtractor={(item, index) => item.hours + index}
                renderItem={({ item }) => (
                    <ListItem
                        meal={item.meal}
                        hours={item.hours}
                        isCorrect={item.isCorrect}
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