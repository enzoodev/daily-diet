import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const Content = styled.View`
    flex: 1;
    padding: 24px;
    border-radius: 20px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const SubContent = styled.View``

export { Container, SubContent, Content };