import { TouchableOpacityProps } from 'react-native';
import { ButtonComponentTypeProps } from 'src/@types/button';
import * as S from './styles';

type Props = TouchableOpacityProps & ButtonComponentTypeProps;

const Button = ({ title, icon, ...rest }: Props) => {
    return(
        <S.Container {...rest}>
            <S.Icon name={icon} />
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}

export default Button;