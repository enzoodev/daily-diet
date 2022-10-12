type IsInDietTypeProps = boolean | undefined;

type MealTypeProps = {
    title: string;
    meal: string;
    hour: string;
    isInDiet: IsInDietTypeProps;
}

type MealListTypeProps = {
    date: string;
    data: MealTypeProps[];
};

export { IsInDietTypeProps, MealTypeProps, MealListTypeProps };