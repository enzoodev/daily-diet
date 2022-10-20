type Props = (date: string) => boolean;

type DataTypeProps = {
    day: number;
    month: number;
    year: number;
}

const validateDate: Props = (date) => {
    if (date === null)
        return false;

    const excludeBars = date.split('/');

    const data: DataTypeProps = {
        day: parseInt(excludeBars[0]),
        month: parseInt(excludeBars[1]),
        year: parseInt(excludeBars[2])
    }

    if (data.year < 2000)
        return false;

    if (data.month < 1 || data.month > 12)
        return false;

    else if (data.day < 1 || data.day > 31)
        return false;

    else if ((data.month === 4 || data.month === 6 || data.month === 9 || data.month === 11) && data.day === 31)
        return false;

    else if (data.month === 2){
        const isleap = (data.year % 4 === 0 && (data.year % 100 !== 0 || data.year % 400 === 0));
        if (data.day > 29 || (data.day === 29 && !isleap))
            return false;
    }

    return true;
}

export default validateDate;