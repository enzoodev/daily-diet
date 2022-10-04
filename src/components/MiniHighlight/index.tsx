import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

type Props = S.MiniHighlightTypeStyleProps & {
    title: string;
}

const MiniHighlight = ({ title, type }: Props) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return(
        <S.Container type={type}>
            <S.Icon onPress={handleGoBack} />
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}

export default MiniHighlight;