import { IsInDietTypeProps } from "./isInDiet";

export type MealTypeProps = {
    title: string;
    meal: string;
    date: string;
    hour: string;
    isInDiet: IsInDietTypeProps;
};