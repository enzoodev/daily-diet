import styled, { css } from 'styled-components/native';

const Container = styled.View`
  
`

const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FAMILY.BOLD};
    font-size: ${theme.FONTS.SIZE.LG};
    color: ${theme.COLORS.BASE.GRAY_1};
`};
`

export { Container, Title }
