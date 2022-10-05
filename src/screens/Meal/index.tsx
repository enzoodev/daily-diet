import Description from '@components/Description';
import MiniHighlight from '@components/MiniHighlight';
import * as S from './styles';

const Meal = () => {
    return(
        <S.Container>
            <MiniHighlight
                title='Refeição'
                type='PRIMARY'
            />
            <S.Content>
                <Description
                    title='Sanduíche'
                    subtitle='Sanduíche de pao integrak com atum e salada de alface e tomate'
                    date='05/10/2022'
                    hour='06:49'
                />
            </S.Content>
        </S.Container>
    )
}

export default Meal;