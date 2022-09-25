import * as S from './styles';

type Props = S.HighlightTypeStyleProps & {
    title: number;
}

const Highlight = ({ title, type, screenWithHeader}: Props) => {
    return(
        <S.Container type={type} screenWithHeader={screenWithHeader}>
            <S.Title>
                {title}
            </S.Title>
            <S.Subtitle>
                das refeições dentro da dieta
            </S.Subtitle>
            { screenWithHeader ? <S.IconArrowUpRight type={type} /> : <S.IconArrowLeft type={type} /> }
        </S.Container>
    )
}

export default Highlight;