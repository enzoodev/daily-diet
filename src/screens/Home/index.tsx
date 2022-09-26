import { useState } from 'react';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import ListItem from '@components/ListItem';
import * as S from './styles';

type Props = {
    title: string;
    data: string;
}

const Home = () => {
    const [list, setList] = useState<Props[]>([]);

    return(
        <S.Container>
            <Header />
            <Highlight
                title={90.86}
                type='PRIMARY'
                screenWithHeader={true}
            />
            <ListItem
                hours='20:00'
                title='Cuscuz com ovo'
            />
            <Button
                title='Nova refeição'
                icon='add'
            />
        </S.Container>
    )
} 

export default Home;