import styled, { css } from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const Content = styled.View`
    flex: 1;
    padding: 24px;
    border-radius: 20px;
    position: relative;
    bottom: 20px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
    `

const SubContent = styled.View``

const MiniContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const HeaderButtonsDiet = styled.Text`
    margin: 30px 0 5px;
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

export { Container, Content, SubContent, MiniContainer, HeaderButtonsDiet };