import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const ContentButton = styled.View`
    margin-top: 20px;
`

const TitleContentButton = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
    margin-bottom: 5px;
`

export { Container, ContentButton, TitleContentButton };