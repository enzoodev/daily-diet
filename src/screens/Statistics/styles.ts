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
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
` 

const MiniContainer = styled.View`
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
` 

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `}
    text-align: center;
    margin-bottom: 15px;
` 

export { Container, Content, MiniContainer, Title };