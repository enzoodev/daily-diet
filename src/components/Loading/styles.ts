import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.BASE.GRAY_1
}))``;

export { Container, LoadIndicator };