import styled, { css } from 'styled-components/native';

type Props = {
    isActive: boolean;
}

const Container = styled.TouchableOpacity`
    width: 100%;
    margin: 4px 0; 
    height: 50px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_5};
    flex-direction: row;
    align-items: center;
`

const Hours = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.BASE.GRAY_1};
    `}
    margin: 14px;
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_2}; 
    `};
    border-left: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_4};
    // border-left/right/top/bottom not working in React Native for IOS
`

const Circle = styled.View<Props>`
    width: 14px;
    height: 14px;
    position: absolute;
    right: 14px;
    border-radius: 50%;
    background-color: ${({ theme, isActive }) => isActive ?
    theme.COLORS.PRODUCT.GREEN_MID : theme.COLORS.PRODUCT.RED_MID};
`

export { Container, Hours, Title, Circle };