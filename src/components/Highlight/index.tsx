import { ViewProps } from 'react-native'
import * as S from './styles';

type Props = ViewProps & S.HighlightTypeStyleProps & {
    title: number;
    icon: string;
}

const Highlight = ({ title, icon, type, sideOfIcon, ...rest}: Props) => {
    return(
        <S.Container
            type={type}
            {...rest}
        >
            <S.Title>
                {title}
            </S.Title>
            <S.Subtitle>
                das refeições dentro da dieta
            </S.Subtitle>
            <S.Icon
                name={icon}
                type={type}
                sideOfIcon={sideOfIcon}
            />
        </S.Container>
    )
}

export default Highlight;