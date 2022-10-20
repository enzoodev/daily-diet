import { MealListTypeProps } from "src/@types/meal";

type Props = (data: MealListTypeProps[]) => number;

const registredMeals: Props = (data) => {
    const listOfNumberOfMeals: number[] = data.map((item: MealListTypeProps) => {
        return item.data.length;
    })
    const numberOfMeals: number = listOfNumberOfMeals.reduce((prev, curr) => prev + curr, 0);

    return numberOfMeals;
}

export default registredMeals;