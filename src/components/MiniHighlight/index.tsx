import * as S from './styles';

type Props = S.MiniHighlightTypeStyleProps & {
    title: string;
    onFunction: () => void;
}

const MiniHighlight = ({ title, type, onFunction }: Props) => {
    return(
        <S.Container type={type}>
            <S.Icon
                onPress={onFunction}
            />
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}

export default MiniHighlight;