import styled, { css } from "styled-components/native";
import { ForkKnife } from "phosphor-react-native";

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

const Content = styled.View`
    flex-direction: row;
`

const Icon = styled(ForkKnife).attrs(({ theme }) => ({
    size: 37,
    color: theme.COLORS.BASE.GRAY_1,
    weight: 'bold'
}))``;

const ContentTitle = styled.View``

const Title = styled.Text`
    ${({ theme }) => css` 
        color:  ${theme.COLORS.BASE.GRAY_1};
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
    `}
`

const Person = styled.View`
    width: 40px;
    height: 40px;
    border: 1px solid  ${({ theme }) => theme.COLORS.BASE.GRAY_2};
    border-radius: 50%;
`

export { Container, Content, Icon, ContentTitle, Title, Person };