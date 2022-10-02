import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Statistics from '@screens/Statistics';
import Meal from '@screens/Meal';
import NewMeal from '@screens/NewMeal';
import EditMeal from '@screens/EditMeal';

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
            <Screen
                name='Meal'
                component={ Meal }
            />
            <Screen
                name='EditMeal'
                component={ EditMeal }
            />
        </Navigator>
    )
}

export default AppRoutes;