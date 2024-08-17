import styled from 'styled-components'
import { colors } from '@/styles/styles'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: ${colors.cyan};
  &:hover {
    background: ${colors.darkCyan};
  }
  height: 35px;
  padding: 0 10px;
  border-radius: 5px;
  border: 0;
  color: #fff;
  cursor: pointer;
  svg + span {
    margin-left: 10px;
  }
  transition: background 200ms linear;
`;

export default function Button(props) {
  const { icon, text, onClick } = props

  return <StyledButton onClick={onClick}>{icon}<span>{text}</span></StyledButton>
}