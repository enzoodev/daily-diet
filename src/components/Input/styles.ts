import styled, { css } from 'styled-components/native';

const Container = styled.View`

`

const Header = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_2};
    `};
`

const Title = styled.TextInput`
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_1};
        border: 1px solid ${theme.COLORS.BASE.GRAY_5};
    `};
`

export { Container, Header, Title };