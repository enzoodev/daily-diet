import styled from "styled-components/native";
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

export { Container, Content };