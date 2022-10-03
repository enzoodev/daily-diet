import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

type FeedbackTypeStyleProps = {
    type: 'PRIMARY' | 'SECONDARY';
}

type Props = FeedbackTypeStyleProps;

const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG};
        color: ${type === 'PRIMARY' ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK};
    `}
`

const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.SM};
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

const BoldDescription = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM};
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

const Icon = styled.Image`

`

export { Container, Title, Description, BoldDescription, Icon };