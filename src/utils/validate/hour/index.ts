type Props = (hour: string) => boolean;

type DataTypeProps = {
    hours: number;
    minutes: number;
}

const validateHour: Props = (hour) => {
    if (hour === null)
        return false;

    const excludeBars = hour.split(':');

    const data: DataTypeProps = {
        hours: parseInt(excludeBars[0]),
        minutes: parseInt(excludeBars[1])
    }

    if (data.hours < 0 || data.hours > 23)
        return false;
    if (data.minutes < 0 || data.minutes > 59)
        return false;

    return true;
}

export default validateHour;