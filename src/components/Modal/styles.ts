import styled, { css } from "styled-components/native";

type ModalTypeStyleProps = {
    type: 'DARK' | 'LIGHT';
    typeTwo?: 'DARK' | 'LIGHT';
    numberOfButtons: 1 | 2;
}

type Props = ModalTypeStyleProps;

const Background = styled.View`
    flex: 1;
    opacity: .25;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.COLORS.BASE.DARK};
`

const Container = styled.View`
    flex: 1;
    padding: 24px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0%;
    left: 0;
    right: 0;
`

const Content = styled.View`
    width: 100%;
    height: 24%;
    padding: 23px;
    border-radius: 6px;
    opacity: 1.0;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const TitleContainer = styled.View`
    align-items: center;
    width: 100%;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
    margin-bottom: 8px;
`

const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_3};
    `};
    width: 80%;
    text-align: center;
`
        
const ContentButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

const Button = styled.TouchableOpacity<Props>`
    width: ${({ numberOfButtons }) => numberOfButtons === 1 ? 100 : 48}%;
    height: 50px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    ${({ theme, type, typeTwo }) => type === 'DARK' || typeTwo === 'DARK' ?
        css` background-color: ${theme.COLORS.BASE.GRAY_2}; `
        : css` border: 1px solid ${theme.COLORS.BASE.GRAY_1}; `
    }
`

const ButtonTitle = styled.Text<Props>`
    ${({ theme, type, typeTwo }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${type === 'DARK' || typeTwo === 'DARK' ?
        theme.COLORS.BASE.LIGHT : theme.COLORS.BASE.GRAY_1};
    `};
`

export { ModalTypeStyleProps, Background, Container, Content, TitleContainer, Title, Subtitle, ContentButton, Button, ButtonTitle };