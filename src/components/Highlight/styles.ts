import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HighlightTypeStyleProps = {
    type: 'PRIMARY' | 'SECONDARY';
    screenWithHeader: boolean;
}

type Props = HighlightTypeStyleProps;

const Container = styled.View<Props>`
    width: 100%;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    ${({ theme, type, screenWithHeader }) => css`
        height: ${screenWithHeader ? 102 : 168}px;
        padding-top: ${!screenWithHeader && 20}px;;
        background-color: ${type === 'PRIMARY' ?
        theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT};
    `}
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

const Icon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK
}))<Props>`
    position: absolute;
    ${({ screenWithHeader }) => screenWithHeader ?
        css`
            right: 4px;
            top: 4px;
        `
        :
        css`
            left: 10px;
            top: 50px;
        `
    };
`

export { HighlightTypeStyleProps, Container, Title, Subtitle, Icon };