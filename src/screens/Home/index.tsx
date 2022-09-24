import Header from '@components/Header';
import Highlight from '@components/Highlight';
import * as S from './styles';

const Home = () => {
    return(
        <S.Container>
            <Header />
            <Highlight
                title={90.86}
                color='PRIMARY'
                screenWithHeader={true}
            />
        </S.Container>
    )
} 

export default Home;