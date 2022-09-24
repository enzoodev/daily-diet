import styled, { css } from "styled-components/native";

type HighlightTypeStyleProps = {
    color: 'PRIMARY' | 'SECONDARY';
    screenWithHeader: boolean;
}

type Props = HighlightTypeStyleProps;

const Container = styled.View<Props>`
    width: 100%;

    height: ${({ screenWithHeader }) => screenWithHeader ? 102 : 168}px;
    background-color: ${({ theme, color }) => color === 'PRIMARY' ? theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT};

    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_2};
    `};
`

export { HighlightTypeStyleProps, Container, Title, Subtitle };