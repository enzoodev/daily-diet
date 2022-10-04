import { useNavigation, useRoute } from '@react-navigation/native'
import { IsInDietTypeProps } from 'src/@types/isInDiet';
import PositiveIllustration from '@assets/positive/Illustration.png'
import NegativeIllustration from '@assets/negative/Illustration.png'
import FeedbackHighlight from '@components/FeedbackHighlight';
import Button from '@components/Button';
import * as S from './styles';

type RouteParams = {
    isInDiet: IsInDietTypeProps;
}

const FeedBack = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { isInDiet } = route.params as RouteParams;

    const handleGoInitialScreen = () => {
        navigation.navigate('home');
    }

    return(
        <S.Container>
            <FeedbackHighlight
                title={ isInDiet ? 'Continue assim!' : 'Que pena!' }
                isInDiet={isInDiet}
            />
            { isInDiet ? <S.Icon source={PositiveIllustration} /> : <S.Icon source={NegativeIllustration} /> }
            <Button
                title='Ir para a página inicial'
                style={{ width: 240 }}
                onPress={handleGoInitialScreen}
            />
        </S.Container>
    )
}

export default FeedBack;