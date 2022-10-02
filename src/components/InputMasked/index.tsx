import { TextInputMaskProps } from 'react-native-masked-text'
import * as S from './styles';

type Props = TextInputMaskProps & {
    title: string;
}

const InputMasked = ({ title, ...rest}: Props) => {
    return(
        <S.Container>
            <S.Header>
                {title}
            </S.Header>
                <S.Title {...rest} />
        </S.Container>
    )
}

export default InputMasked;