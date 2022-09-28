import * as S from './styles';

type Props = {
    message: string;
}

const ListEmpty = ({ message }: Props) => {
    return(
        <S.Container>
            <S.Title>
                {message}
            </S.Title>
        </S.Container>
    )
}

export default ListEmpty;