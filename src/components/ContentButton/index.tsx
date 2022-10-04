import { ButtonComponentTypeProps } from 'src/@types/button';
import Button from '@components/Button';
import * as S from './styles';

type Props = ButtonComponentTypeProps & {
    contentTitle: string;
}

const ContentButton = ({ contentTitle, title, icon, ...rest }: Props) => {
    return(
        <S.Container>
            <S.Title>
                {contentTitle}
            </S.Title>
            <Button
                title={title}
                icon={icon}
                {...rest}
            />
        </S.Container>
    )
}

export default ContentButton;