import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type Props = TouchableOpacityProps & S.DietInfoTypeStyleProps;

const DietInfo = ({ isInDiet, ...rest }: Props) => {
    return(
        <S.Container {...rest}>
            <S.Icon isInDiet={isInDiet} />
            <S.Title>
                { isInDiet ? 'dentro' : 'fora' } da dieta
            </S.Title>
        </S.Container>
    )
}

export default DietInfo;
