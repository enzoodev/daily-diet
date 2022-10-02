import styled, { css } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

const Container = styled.View`
    margin-top: 20px;
`

const Header = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_2};
    `};
`

const Title = styled(TextInputMask)`
    width: 153px;
    height: 48px;
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