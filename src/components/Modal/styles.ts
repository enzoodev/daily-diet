import styled, { css } from "styled-components/native";

type ModalTypeStyleProps = {
    type: 'DARK' | 'LIGHT';
}

type Props = ModalTypeStyleProps;

const Container = styled.View`
    position: absolute;
    flex: 1;
    opacity: 25%;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const Content = styled.View`
    width: 100%;
    height: 24%;
    padding: 23px;
    border-radius: 6px;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD};
        color: ${theme.COLORS.BASE.GRAY_2};
    `};
    width: 80%;
    margin-top: 15px;
    text-align: center;
`
        
const ContentButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

const Button = styled.TouchableOpacity<Props>`
    width: 48%;
    height: 26%;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    {({ theme, type }) type === 'DARK' ?
        css` background-color: ${theme.COLORS.BASE.GRAY_2}; `
        : css` border: 1px solid ${theme.COLORS.BASE.GRAY_1}; `
    }
`

const ButtonTitle = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM};
        color: ${type === 'DARK' ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY_1};
    `};
`

export { ModalTypeStyleProps, Container, Content, Title, ContentButton, Button, ButtonTitle };
