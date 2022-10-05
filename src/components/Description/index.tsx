import * as S from './styles';

type Props = {
    title: string;
    subtitle: string;
    date: string;
    hour: string;
}

const Description = ({ title, subtitle, date, hour }: Props) => {
    return(
        <S.Container>
            <S.Content>
                <S.Title>
                    {title}
                </S.Title>
                <S.Subtitle>
                    {subtitle}
                </S.Subtitle>
            </S.Content>
            <S.Content>
                <S.MiniTitle>
                    Data e hora
                </S.MiniTitle>
                <S.Subtitle>
                    {date} às {hour}
                </S.Subtitle>
            </S.Content>
        </S.Container>
    )
}

export default Description;