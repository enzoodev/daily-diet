import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type Props = TouchableOpacityProps & S.ModalTypeStyleProps & {
    isVisible: boolean;
    title: string;
    buttonTitle: string;
    buttonTitleTwo?: string;
}

const Modal = ({ isVisible, title, type, ...rest }: Props) => {
    return(
        { isVisible &&
            <S.Container>
                <S.Content>
                    <S.Title>
                        {title}
                    </S.Title>
                    <S.ContentButton>
                        <S.Button
                            type={type}
                            {...rest}
                        >
                            <S.ButtonTitle>
                                {buttonTitle}
                            </S.ButtonTitle>
                        </S.Button>
                        { buttonTitleTwo &&
                            <S.Button
                                type={type}
                                {...rest}
                            >
                                <S.ButtonTitle>
                                    {buttonTitleTwo}
                                </S.ButtonTitle>
                            </S.Button>
                        }
                    </S.ContentButton>
                </S.Content>  
            </S.Container>
        }
    )
}

export default Modal;
