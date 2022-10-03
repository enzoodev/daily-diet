import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
`

const Icon = styled.Image`

`

export { Container, Icon };