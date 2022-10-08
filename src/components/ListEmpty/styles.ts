import styled, { css } from "styled-components/native";

const Container = styled.View`
    height: 400px;
    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.GRAY_2};
    `};
`

export { Container, Title };
