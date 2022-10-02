import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type Props = TouchableOpacityProps & S.ButtonDietTypeStyleProps & {
    title: string;
}

const ButtonDiet = ({ title, type, ...rest }: Props) => {
    return(
        <>
            <S.Container
                type={type}
                {...rest}
            >
                <S.Icon type={type} />
                <S.Title>
                    {title}
                </S.Title>
            </S.Container>
        </>
    )
}

export default ButtonDiet;