import styled, { css } from "styled-components/native";

type FeedbackHighlightTypeStyleProps = {
    isInDiet: boolean;
}

type Props = FeedbackHighlightTypeStyleProps;

const Container = styled.View`

`

const Title = styled.Text<Props>`
    ${({ theme, isInDiet }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG};
        color: ${isInDiet ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK};
    `};
`

const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.SM};
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

const BoldSubtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM};
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

export { FeedbackHighlightTypeStyleProps, Container, Title, Subtitle, BoldSubtitle };