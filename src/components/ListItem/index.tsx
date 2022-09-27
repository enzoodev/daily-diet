import { TouchableOpacityProps } from 'react-native';
import { MealTypeProps } from 'src/@types/meal';
import * as S from './styles';

type Props = TouchableOpacityProps & MealTypeProps;

const ListItem = ({ hours, meal, isCorrect, ...rest }: Props) => {
    return(
        <S.Container {...rest}>
            <S.Hours>
                {hours}
            </S.Hours>
            <S.Title>
                {meal}
            </S.Title>
            <S.Circle isActive={isCorrect} />
        </S.Container>
    )
}

export default ListItem;