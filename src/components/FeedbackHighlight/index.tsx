import * as S from './styles';

type Props = S.FeedbackHighlightTypeStyleProps & {
    title: string;
}

const FeedbackHighlight = ({ title, isInDiet }: Props) => {
    return(
        <S.Container>
            <S.Title isInDiet={isInDiet}>
                {title}
            </S.Title>
            { isInDiet ?
                <S.Subtitle>
                    Você continua <S.BoldSubtitle>dentro da dieta</S.BoldSubtitle>. muito bem!
                </S.Subtitle>
            :
                <S.Subtitle>
                    Você <S.BoldSubtitle>saiu da dieta</S.BoldSubtitle> dessa vez, mas continue sem esforçando e não desista!
                </S.Subtitle>
            }
        </S.Container>
    )
}

export default FeedbackHighlight;