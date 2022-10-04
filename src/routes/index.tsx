import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import AppRoutes from './app.routes';

const Routes = () => {
    const { COLORS } = useTheme();

    return(
        <View style={{ flex: 1, backgroundColor: COLORS.BASE.GRAY_7 }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}

export default Routes;