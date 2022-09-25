import styled, { css } from "styled-components/native";
import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';

type HighlightTypeStyleProps = {
    type: 'PRIMARY' | 'SECONDARY';
    screenWithHeader: boolean;
}

type Props = HighlightTypeStyleProps;

const Container = styled.View<Props>`
    width: 100%;
    border-radius: 6px;

    height: ${({ screenWithHeader }) => screenWithHeader ? 102 : 168}px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ?
    theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT};

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

const IconArrowLeft = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK
}))`
    position: absolute;
    top: 4px;
    left: 4px;
`;

const IconArrowUpRight = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK
}))`
    position: absolute;
    top: 4px;
    right: 4px;
`;

export { HighlightTypeStyleProps, Container, Title, Subtitle, IconArrowLeft, IconArrowUpRight };