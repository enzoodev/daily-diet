import styled, { css } from "styled-components/native";
import { IsInDietTypeProps } from "src/@types/meal";

type FeedbackHighlightTypeStyleProps = {
    isInDiet: IsInDietTypeProps;
}

type Props = FeedbackHighlightTypeStyleProps;

const Container = styled.View``

const Title = styled.Text<Props>`
    ${({ theme, isInDiet }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${isInDiet ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK};
    `};
    text-align: center;
`

const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
    text-align: center;
    margin: 8px 0 40px;
`

const BoldSubtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

export { FeedbackHighlightTypeStyleProps, Container, Title, Subtitle, BoldSubtitle };