import { MealListTypeProps } from "./meal";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: undefined;
            newMeal: undefined;
            editMeal: {
                meal: MealListTypeProps;
            }
            meal: {
                meal: MealListTypeProps;
            }
            feedback: {
                isInDiet: undefined | boolean;
            }
        }
    }
}