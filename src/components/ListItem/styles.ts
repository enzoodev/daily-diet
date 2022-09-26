import styled, { css } from 'styled-components/native';

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_5};
`

const Hours = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.SM};
        color: ${theme.COLORS.BASE.GRAY_1};
    `}
`

const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD};
        color: ${theme.COLORS.BASE.GRAY_2}; 
    `}
`

export { Container, Hours, Title };