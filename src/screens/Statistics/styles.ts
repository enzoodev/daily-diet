import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const Content = styled.View`
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
    position: relative;
    bottom: 25px;
` 

export { Container, Content, Title };
