import styled, { css } from "styled-components/native";
import { PhosphorLogo } from 'phosphor-react-native'

type IconTypeStyleProps = string;

type Props = IconTypeStyleProps;

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    margin-top: 50px;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.WHITE};
    `};
`

const Icon = styled(PhosphorLogo).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.BASE.WHITE
}))``;

export { Container, Title, Icon };