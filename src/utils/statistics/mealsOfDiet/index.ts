import { IsInDietTypeProps, MealListTypeProps, MealTypeProps } from "src/@types/meal";

type Props = (data: MealListTypeProps[], type: boolean) => number;

const mealsOfDiet: Props = (data, type) => {

    const listOfNumberOfMealsInDiet: number[] = data.map((item: MealListTypeProps) => {
        return item.data.map((item: MealTypeProps) => {
            return item.isInDiet;
        })
        .filter((item: IsInDietTypeProps) => item === type).length;
    })

    const numberOfMealsInDiet: number = listOfNumberOfMealsInDiet.reduce((prev, curr) => prev + curr, 0);

    return numberOfMealsInDiet;
}

export default mealsOfDiet;