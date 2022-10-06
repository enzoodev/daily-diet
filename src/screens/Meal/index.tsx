import MiniHighlight from '@components/MiniHighlight';
import Description from '@components/Description';
import DietInfo from '@components/DietInfo';
import Button from '@components/Button';
import * as S from './styles';

const Meal = () => {
    return(
        <S.Container>
            <MiniHighlight
                title='Refeição'
                type='PRIMARY'
            />
            <S.Content>
                <S.SubContent>
                    <Description
                        title='Sanduíche'
                        subtitle='Sanduíche de pao integral com atum e salada de alface e tomate'
                        date='05/10/2022'
                        hour='06:49'
                    />
                    <DietInfo
                        isInDiet={true}
                    />
                </S.SubContent>
                <S.SubContent>
                    <Button
                        title='Editar refeição'
                        type='DARK'
                        iconCommunity='lead-pencil'
                    />
                    <Button
                        title='Excluir refeição'
                        type='LIGHT'
                        iconCommunity='trash-can'
                        style={{ marginTop: 5 }}
                    />
                </S.SubContent>
            </S.Content>
        </S.Container>
    )
}

export default Meal;