type Props = (date: string) => boolean;

type SeparateDataTypeProps = {
    day: string;
    month: string;
    year: string;
}

type DataTypeProps = {
    day: number;
    month: number;
    year: number;
}

const validateDate: Props = (date) => {
    if (date === null)
        return false;

    const excludeBars = date.split('/');

    const separateData: SeparateDataTypeProps = {
        day: excludeBars[0],
        month: excludeBars[1],
        year: excludeBars[2]
    }

    const data: DataTypeProps = {
        day: parseInt(separateData.day),
        month: parseInt(separateData.month),
        year: parseInt(separateData.year)
    }

    if (data.month < 1 || data.month > 12)
        return false;

    else if (data.day < 1 || data.day> 31)
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