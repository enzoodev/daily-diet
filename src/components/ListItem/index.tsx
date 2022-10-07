import { TouchableOpacityProps } from 'react-native';
import { MealTypeProps } from 'src/@types/meal';
import * as S from './styles';

type Props = TouchableOpacityProps & MealTypeProps;

const ListItem = ({ title, meal, date, hour, isCorrect, ...rest }: Props) => {
    return(
        <S.Container {...rest}>
            <S.Hours>
                {hour}
            </S.Hours>
            <S.Title>
                {title}
            </S.Title>
            <S.Circle isActive={isCorrect} />
        </S.Container>
    )
}

export default ListItem;