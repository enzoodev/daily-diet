import * as S from './styles';

type Props = S.HighlightTypeStyleProps & {
    title: number;
}

const Highlight = ({ title, ...rest }: Props) => {
    return(
        <S.Container {...rest}>
            <S.Title>
                {title}
            </S.Title>
            <S.Subtitle>
                das refeições dentro da dieta
            </S.Subtitle>
        </S.Container>
    )
}

export default Highlight;