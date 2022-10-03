import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '@components/Button';
import PositiveIllustration from '@assets/positive/Illustration.png'
import NegativeIllustration from '@assets/negative/Illustration.png'
import * as S from './styles';
import FeedbackHighlight from '@components/FeedbackHighlight';

type RouteParams = {
    isInDiet: boolean;
}

const FeedBack = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { isInDiet } = route.params as RouteParams;

    console.log(isInDiet);

    return(
        <S.Container>
            <S.Icon source={PositiveIllustration} />
            <FeedbackHighlight
                title='Continue assim!'
                isInDiet={isInDiet}
            />
            { isInDiet ? <S.Icon source={PositiveIllustration} /> : <S.Icon source={NegativeIllustration} /> }
            <Button
                title='Ir para a página inicial'
            />
        </S.Container>
    )
}

export default FeedBack;