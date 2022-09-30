import { TextInputProps } from 'react-native';
import * as S from './styles';

type Props = TextInputProps & {
    title: string;
}

const Input = ({ title, ...rest }: Props) => {
    return(
        <S.Container>
            <S.Header>
                {title}
            </S.Header>
            <S.Title
                placeholder="useless placeholder"
                {...rest}
            />
        </S.Container>
    )
}

export default Input;