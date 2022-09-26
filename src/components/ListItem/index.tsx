import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type Props = TouchableOpacityProps & {
    hours: string;
    title: string;
}

const ListItem = ({ hours, title, ...rest }: Props) => {
    return(
        <S.Container {...rest}>
            <S.Hours>
                20:00
            </S.Hours>
            <S.Title>
                Comida refeição 1
            </S.Title>
        </S.Container>
    )
}

export default ListItem;