import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import * as S from './styles';

const Home = () => {
    return(
        <S.Container>
            <Header />
            <Highlight
                title={90.86}
                type='PRIMARY'
                screenWithHeader={true}
            />
            <Button
                title='Nova refeição'
                icon='add'
            />
        </S.Container>
    )
} 

export default Home;