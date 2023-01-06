import styled, { css } from 'styled-components';


export const Container = styled.button`
${({ theme }) => css`
background: ${theme.colors.primary}
`}
`