type IsInDietTypeProps = boolean | undefined;

type MealTypeProps = {
    title: string;
    meal: string;
    hour: string;
    isInDiet: IsInDietTypeProps;
}

type NewMealTypeProps = {
    date: string;
    data: Meal;
};

type MealListTypeProps = {
    date: string;
    data: Meal[];
};

export { IsInDietTypeProps, MealTypeProps, NewMealTypeProps, MealListTypeProps };