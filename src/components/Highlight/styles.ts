import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HighlightTypeStyleProps = {
    type: 'PRIMARY' | 'SECONDARY';
    sideOfIcon: 'LEFT' | 'RIGHT';
}

type Props = HighlightTypeStyleProps;

const Container = styled.View<Props>`
    width: 100%;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ?
        theme.COLORS.PRODUCT.PRIMARY_LIGHT : theme.COLORS.PRODUCT.SECONDARY_LIGHT};
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
    color: type === 'PRIMARY' ? theme.COLORS.PRODUCT.PRIMARY_DARK : theme.COLORS.PRODUCT.SECONDARY_DARK
}))<Props>`
    position: absolute;
    ${({ sideOfIcon }) => sideOfIcon === 'LEFT' ?
        css`
            left: 10px;
            top: 60px;
        `
        :
        css`
            right: 8px;
            top: 8px;
        `
    };
`

export { HighlightTypeStyleProps, Container, Title, Subtitle, Icon };