import { useState } from 'react';
import { SectionList } from 'react-native';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import ListItem from '@components/ListItem';
import HeaderListItem from '@components/HeaderListItem';
import * as S from './styles';
import { MealTypeProps } from 'src/@types/meal';

type Props = {
    title: string;
    data: MealTypeProps[];
}

const Home = () => {
    const [list, setList] = useState<Props[]>([
        {
            title: '28/09/2022', 
            data: [
                {hours: '08:00', meal: 'refeição 1'},
                {hours: '13:00', meal: 'refeição 2'},
                {hours: '19:00', meal: 'refeição 3'}
            ]
        },
        {
            title: '27/09/2022', 
            data: [
                {hours: '08:00', meal: 'refeição 1'},
                {hours: '13:00', meal: 'refeição 2'},
                {hours: '19:00', meal: 'refeição 3'}
            ]
        },
        {
            title: '26/09/2022', 
            data: [
                {hours: '08:00', meal: 'refeição 1'},
                {hours: '13:00', meal: 'refeição 2'},
                {hours: '19:00', meal: 'refeição 3'}
            ]
        }
    ]);

    return(
        <S.Container>
            <Header />
            <Highlight
                title={90.86}
                type='PRIMARY'
                screenWithHeader={true}
            />
           <SectionList
                sections={list}
                keyExtractor={(item, index) => item.hours + index}
                renderItem={({ item }) => (
                    <ListItem
                        meal={item.meal}
                        hours={item.hours}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <HeaderListItem title={title} />
                )}
            />
            <Button
                title='Nova refeição'
                icon='add'
            />
        </S.Container>
    )
} 

export default Home;