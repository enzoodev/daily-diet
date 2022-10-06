import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as S from './styles';

type Props = TouchableOpacityProps & S.ButtonTypeStyleProps & {
    title: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
    iconCommunity?: keyof typeof MaterialCommunityIcons.glyphMap;
}

const Button = ({ title, icon, iconCommunity, type, ...rest }: Props) => {
    return(
        <S.Container
            type={type}
            {...rest}
        >
            { icon &&
                <S.Icon
                    type={type}
                    name={icon}
                />
            }
            { iconCommunity &&
                <S.IconCommunity
                    type={type}
                    name={iconCommunity}
                />
            }
            <S.Title type={type}>
                {title}
            </S.Title>
        </S.Container>
    )
}

export default Button;