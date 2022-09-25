import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Button from '@components/Button';
import * as S from './styles';

const Home = () => {
    const handleAddNewMeal = () => {
        console.log('test');
    }

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
                onPress={() => handleAddNewMeal}
            />
        </S.Container>
    )
} 

export default Home;