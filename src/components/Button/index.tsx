import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type Props = TouchableOpacityProps & {
    title: string
}

const Button = ({ title, ...rest } : Props) => {
    return(
        <S.Container {...rest}>
            <S.Icon />
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}

export default Button;