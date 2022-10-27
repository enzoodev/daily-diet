import { MealListTypeProps } from "src/@types/meal";

type Props = (data: MealListTypeProps[]) => MealListTypeProps[];

const sort: Props = (data) => {

    const generateDate: any[] = data
    .map((item: any) => {
        const day: string = item.date.slice(0, 2);
        const month: string = item.date.slice(3, 5);
        const year: string = item.date.slice(6, 8);

        item.date = new Date(`20${year}-${month}-${day}`);

        item.data
        .map((internalItem: any) => {
            const hour: number = parseInt(internalItem.hour.substring(0, 2));
            const minutes: number = parseInt(internalItem.hour.substring(3, 5));

            internalItem.hourInDateFormat = new Date(new Date().setHours(hour - 3, minutes));

            return internalItem;
        })

        return item;
    })

    const sortDateTime: any[] = generateDate
    .sort((a, b) => b.date - a.date)
    .map((item: any) => {
        item.data.sort((a: any, b: any) => b.hourInDateFormat - a.hourInDateFormat);
        return item;
    })

    const returnDateTimeToString: MealListTypeProps[] = sortDateTime
    .map((item: any) => {
        const dateToString: string = item.date.toISOString().slice(0,10);

        const day: string = dateToString.slice(8, 10);
        const month: string = dateToString.slice(5, 7);
        const year: string = dateToString.slice(2, 4);

        item.date = `${day}.${month}.${year}`;

        item.data
        .map((internalItem: any) => {
            const dateTimeToString: string = internalItem.hourInDateFormat.toISOString().slice(11,16);

            const hourNumberFormat: number = parseInt(dateTimeToString.slice(0, 2));
            const hour: string  = hourNumberFormat > 10 ? `${hourNumberFormat}` : `0${hourNumberFormat}`;

            const minutesNumberFormat: number = parseInt(dateTimeToString.slice(3, 5));
            const minutes: string = minutesNumberFormat > 10 ? `${minutesNumberFormat}` : `0${minutesNumberFormat}`;
            
            internalItem.hour = `${hour}:${minutes}`;

            delete internalItem.hourInDateFormat;
        })
        
        return item; 
    })

    return returnDateTimeToString;
}

export default sort;