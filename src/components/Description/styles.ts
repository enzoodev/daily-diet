import styled, { css } from "styled-components/native";

const Container = styled.View``

const Content = styled.View`
    margin: 15px 0;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

const MiniTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_2};
    `};
    margin-top: 5px;
`

export { Container, Content, Title, MiniTitle, Subtitle };