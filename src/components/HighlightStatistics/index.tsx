import * as S from './styles';

type Props = S.HighlightStatisticsTypeStyleProps & {
    title: number;
    subtitle: string;
}

const HighLightStatistics = ({ title, subtitle, ...rest }: Props) => {
    return(
        <S.Container {...rest}>
            <S.Title>
                {title}
            </S.Title>
            <S.Subtitle>
                {subtitle}
            </S.Subtitle>
        </S.Container>
    )
}

export default HighLightStatistics;