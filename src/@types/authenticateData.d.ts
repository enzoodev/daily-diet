import { MealListTypeProps } from "./meal";

type AuthenticateDataTypeProps = (MealListTypeProps) => boolean;

type AuthenticateDataObjectTypeProps = {
    date: boolean;
    hour: boolean;
    title: boolean;
    meal: boolean;
    isInDiet: boolean;
}

export { AuthenticateDataTypeProps, AuthenticateDataObjectTypeProps };