import styled, { css } from "styled-components/native";
import { IsInDietTypeProps } from "src/@types/meal";

type ButtonDietTypeStyleProps = {
    type: 'PRIMARY' | 'SECONDARY';
    isActive: IsInDietTypeProps;
}

type Props = ButtonDietTypeStyleProps;

const Container = styled.TouchableOpacity<Props>`
    width: 160px;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${({ theme, type, isActive }) => isActive ? css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.PRODUCT.PRIMARY_LIGHT : theme.COLORS.PRODUCT.SECONDARY_LIGHT};
        border: 1px solid ${type === 'PRIMARY' ? theme.COLORS.PRODUCT.PRIMARY_DARK : theme.COLORS.PRODUCT.SECONDARY_DARK};
    ` : css`
        background-color: ${theme.COLORS.BASE.GRAY_6};
    `
    };
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

const Icon = styled.View<Props>`
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ?
        theme.COLORS.PRODUCT.PRIMARY_DARK : theme.COLORS.PRODUCT.SECONDARY_DARK
    };
`

export { ButtonDietTypeStyleProps, Container, Title, Icon };