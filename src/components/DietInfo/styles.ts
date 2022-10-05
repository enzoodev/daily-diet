import styled, { css } from "styled-components/native";

type DietInfoTypeStyleProps = {
    isInDiet: boolean;
}

type Props = DietInfoTypeStyleProps;

const Container = styled.TouchableOpacity`
    padding: 18px 24px;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_6};
`

const Icon = styled.View<Props>`
    width: 8px;
    height: 8px;
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
