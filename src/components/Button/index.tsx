import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as S from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}

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