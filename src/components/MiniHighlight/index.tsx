import * as S from './styles';

type Props = {
    title: string;
}

const MiniHighlight = ({ title }: Props) => {
    return(
        <S.Container>
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}

export default MiniHighlight;