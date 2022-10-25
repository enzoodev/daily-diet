import { MealListTypeProps } from "src/@types/meal";

type Props = (data: MealListTypeProps[]) => MealListTypeProps[];

const sort: Props = (data) => {
    const generateDate = data.map((item: any) => {
        const day = item.date.substring(0,2);
        const month = item.date.substring(3,5);
        const year = item.date.substring(6,10);
        item.date = new Date(`${year}-${month}-${day}`);
        return item;
    })

    const sortDates = generateDate.sort((a, b) => {
        return b.date - a.date;
    })

    console.log(generateDate);
    console.log(sortDates);

/*  var parts ='2014-04-03'.split('-');
    Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    January - 0, February - 1, etc.
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
    console.log(mydate.toDateString()); */

    const sortedData: MealListTypeProps[] = data;

    return sortedData;
}

export default sort;