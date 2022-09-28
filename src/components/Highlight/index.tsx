import * as S from './styles';

type Props = S.HighlightTypeStyleProps & {
    title: number;
}

const Highlight = ({ title, screenWithHeader, ...rest}: Props) => {
    return(
        <S.Container
            screenWithHeader={screenWithHeader}
            {...rest}
        >
            <S.Title>
                {title}
            </S.Title>
            <S.Subtitle>
                das refeições dentro da dieta
            </S.Subtitle>
            <S.Icon
                name={screenWithHeader ? 'arrow-top-right' : 'arrow-left'}
                screenWithHeader={screenWithHeader}
                {...rest}
            />
        </S.Container>
    )
}

export default Highlight;