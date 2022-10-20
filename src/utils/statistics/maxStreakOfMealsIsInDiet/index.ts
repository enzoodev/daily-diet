import { IsInDietTypeProps, MealListTypeProps, MealTypeProps } from "src/@types/meal";

type Props = (data: MealListTypeProps[]) => number;

const maxStreakOfMealsIsInDiet: Props = (data) => {
    const listsOfMealsInOrOutOfDiet: IsInDietTypeProps[][] = data.map((item: MealListTypeProps) => {
        return item.data.map((item: MealTypeProps) => {
            return item.isInDiet;
        })
    })
    const listOfMealsInOrOutOfDiet: any[] = listsOfMealsInOrOutOfDiet.reduce((prev, curr) => prev.concat(curr), []);

    const convertToString: string = listOfMealsInOrOutOfDiet.join(',');
    const excludeFalses: string[] = convertToString.split('false');
    const sort: string[] = excludeFalses.sort((seq1, seq2) =>  seq2.length - seq1.length);
    const searchTheLonger: string[] = sort.splice(0, 1);
    const separateResult: any = searchTheLonger.pop();
    const returnToArray = separateResult.split(','); 
    const filter = returnToArray.filter((item: string) => item !== '');
    const sizeOfTheBiggerStreak = filter.length;

    return sizeOfTheBiggerStreak;
}

export default maxStreakOfMealsIsInDiet;