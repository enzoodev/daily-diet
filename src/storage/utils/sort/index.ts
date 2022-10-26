import { MealListTypeProps } from "src/@types/meal";

type Props = (data: MealListTypeProps[]) => MealListTypeProps[];

const sort: Props = (data) => {
    const generateDate: any[] = data.map((item: any) => {
        const day: string = item.date.slice(0,2);
        const month: string = item.date.slice(3,5);
        const year: string = item.date.slice(6,10);
        item.date = new Date(`${year}-${month}-${day}`);
        return item;
    })

    const sortDates: any[] = generateDate.sort((a, b) => b.date - a.date);

    const returnDateToString: MealListTypeProps[] = sortDates.map((item: any) => {
        const dateToString: string = item.date.toISOString().slice(0,10);
        const day: string = dateToString.slice(8, 10);
        const month: string = dateToString.slice(5, 7);
        const year: string = dateToString.slice(2, 4);
        item.date = `${day}.${month}.${year}`;
        return item; 
    })

    return returnDateToString;
}

export default sort;