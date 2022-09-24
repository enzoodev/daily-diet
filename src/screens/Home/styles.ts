import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
    padding: 24px;
`

export { Container };