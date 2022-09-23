import styled, { css } from "styled-components/native";

const Container = styled.View`
    flex: 1%;
    background-color: ${({ theme }) => theme.COLORS.PRODUCT.RED_LIGHT};
    align-items: center;
    justify-content: center;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
    `}
`

export { Container, Title };