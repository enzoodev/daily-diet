import Input from '@components/Input';
import MiniHighlight from '@components/MiniHighlight';
import * as S from './styles';

const NewMeal = () => {
    return(
        <>
            <MiniHighlight
                title='Nova refeição'
                type='DEFAULT'
            />
            <S.Container>
                <Input
                    title={'Nome'}
                />
            </S.Container>
        </>
    )
}

export default NewMeal;