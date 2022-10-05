import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Statistics from '@screens/Statistics';
import Meal from '@screens/Meal';
import NewMeal from '@screens/NewMeal';
import EditMeal from '@screens/EditMeal';
import FeedBack from '@screens/Feedback';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={ Home }
            />
            <Screen
                name='newMeal'
                component={ NewMeal }
            />
            <Screen
                name='feedback'
                component={ FeedBack }
            />
            <Screen
                name='statistics'
                component={ Statistics }
            />
            <Screen
                name='meal'
                component={ Meal }
            />
            <Screen
                name='editMeal'
                component={ EditMeal }
            />
        </Navigator>
    )
}

export default AppRoutes;