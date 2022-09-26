import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    margin-top: 50px;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.WHITE};
    `};
    margin-left: 6px;
`

const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.BASE.WHITE,
    weight: 'fill'
}))``;

export { Container, Title, Icon };