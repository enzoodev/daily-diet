import { MealTypeProps } from "./meal";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: undefined;
            newMeal: undefined;
            meal: {
                meal: MealTypeProps;
            }
            feedback: {
                isInDiet: undefined | boolean;
            }
            editMeal: undefined;
        }
    }
}