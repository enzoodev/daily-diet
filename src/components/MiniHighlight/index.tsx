import * as S from './styles';

type Props = S.MiniHighlightTypeStyleProps & {
    title: string;
}

const MiniHighlight = ({ title, type }: Props) => {
    return(
        <S.Container type={type}>
            <S.Icon />
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}

export default MiniHighlight;