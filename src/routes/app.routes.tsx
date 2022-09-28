import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Statistics from '@screens/Statistics';
import NewMeal from '@screens/NewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='newMeal'
                component={ NewMeal }
            />
            <Screen
                name='home'
                component={ Home }
            />
            <Screen
                name='statistics'
                component={ Statistics }
            />
        </Navigator>
    )
}

export default AppRoutes;