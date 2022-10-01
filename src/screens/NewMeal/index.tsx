import Input from '@components/Input';
import MiniHighlight from '@components/MiniHighlight';
import * as S from './styles';

const NewMeal = () => {
    return(
        <S.Container>
            <MiniHighlight
                title='Nova refeição'
                type='DEFAULT'
            />
            <S.Content>
                <Input
                    title={'Nome'}
                    style={{ height: 48 }}
                    maxLength={40}
                />
               <Input
                    title={'Descrição'}
                    style={{ height: 120 }}
                    multiline={true}
                    textAlignVertical={'top'} /* compatibility for Android */
                    maxLength={220}
                />
                <S.MiniContainer>
                    <Input
                        title={'Data'}
                        style={{ height: 48, width: 153 }}
                        maxLength={10}
                    />
                    <Input
                        title={'Hora'}
                        style={{ height: 48, width: 153 }}
                        maxLength={5}
                    />
                </S.MiniContainer>
            </S.Content>
        </S.Container>
    )
}

export default NewMeal;