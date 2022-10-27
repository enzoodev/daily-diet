import styled, { css } from "styled-components/native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

type ButtonTypeStyleProps = {
    type: 'DARK' | 'LIGHT';
}

type Props = ButtonTypeStyleProps;

const Container = styled.TouchableOpacity<Props>`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${({ theme, type }) => type === 'DARK' ? css`
        background-color: ${theme.COLORS.BASE.GRAY_2};
    ` : css`
        border: 1px solid ${theme.COLORS.BASE.GRAY_1};
    `};
`

const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${type === 'DARK' ? theme.COLORS.BASE.LIGHT : theme.COLORS.BASE.GRAY_1};
    `};
    margin-left: 6px;
`

const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === 'DARK' ? theme.COLORS.BASE.LIGHT : theme.COLORS.BASE.GRAY_1
}))``;

const IconCommunity = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === 'DARK' ? theme.COLORS.BASE.LIGHT : theme.COLORS.BASE.GRAY_1
}))``;

export { ButtonTypeStyleProps, Container, Title, Icon, IconCommunity };