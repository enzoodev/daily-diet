import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_1};
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
    flex-direction: row;
    justify-content: space-between;
`

export { Container, Content, MiniContainer };