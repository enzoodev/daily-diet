import styled, { css } from "styled-components/native";

const Container = styled.View`
    height: 400px;
    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_3};
    `};
`

export { Container, Title };
