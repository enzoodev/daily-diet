import styled, { css } from "styled-components/native";
import { IsInDietTypeProps } from "src/@types/meal";

type DietInfoTypeStyleProps = {
    isInDiet: IsInDietTypeProps;
}

type Props = DietInfoTypeStyleProps;

const Container = styled.TouchableOpacity`
    width: 40%;
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};
`

const Icon = styled.View<Props>`
    width: 8px;
    height: 8px;
    margin-right: 4px;
    border-radius: 50%;
    background-color: ${({ theme, isInDiet }) => isInDiet ?
    theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK};
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `};
`

export { DietInfoTypeStyleProps, Container, Icon, Title };
