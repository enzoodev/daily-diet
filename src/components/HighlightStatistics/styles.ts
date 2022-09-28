import styled, { css } from "styled-components/native";

type HighlightStatisticsTypeStyleProps = {
    type: 'DEFAULT' | 'PRIMARY' | 'SECONDARY';
    isComplete: boolean;
 }

 type Props = HighlightStatisticsTypeStyleProps;

const Container = styled.View<Props>`
    padding: 5px;
    margin: 10px 0;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    ${({ theme, type, isComplete }) => css`
        width: ${isComplete ? 100 : 48}%;
        height: ${isComplete ? 17 : 21}%;
        background-color: ${type === 'DEFAULT' ?
        theme.COLORS.BASE.GRAY_5 : type === 'PRIMARY' ?
        theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT};
    `}
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `}
    text-align: center;
    margin-bottom: 3px;
`

const Subtitle = styled.Text>`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_2};
    `}
    text-align: center;
`

export { HighlightStatisticsTypeStyleProps, Container, Title, Subtitle };
