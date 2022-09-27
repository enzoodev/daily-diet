import styled, { css } from 'styled-components/native';

const Container = styled.View`
  height: 40px;
  margin-top: 10px;
  justify-content: center;
`

const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FAMILY.BOLD};
    font-size: ${theme.FONTS.SIZE.LG}px;
    color: ${theme.COLORS.BASE.GRAY_1};
`};
`

export { Container, Title }
