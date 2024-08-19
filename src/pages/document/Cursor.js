import styled from "styled-components"
import { colors, grays } from "@/styles/styles"

const colorsArr = Object.keys(colors).map(key => [colors[key]]);

const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 20px;
  // z-index: 1;
  // top: 29px;
  // left: 0;
  // border-radius: 4px;
  // padding: 0 3px;
  // height: 14px;
  // line-height: 14px;
  // font-size: 10px;
  // color: #fff;
  background: ${props => {
    if (props.$index < 5) {
      return colorsArr[props.$index * 2]
    } else {
      return colorsArr[(props.$index - 5) * 2 + 1]
    }
  }};
  // transition: opacity 200ms linear;
`

const Tag = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 1;
  top: 29px;
  left: 0;
  border-radius: 4px;
  padding: 0 3px;
  height: 14px;
  line-height: 14px;
  font-size: 10px;
  color: #fff;
  background: ${props => {
    if (props.$index < 5) {
      return colorsArr[props.$index * 2]
    } else {
      return colorsArr[(props.$index - 5) * 2 + 1]
    }
  }};
  transition: opacity 200ms linear;
`

export default function Cursor(props) {
  const { collabeditor, index } = props

  return <>
    <Line $index={index}></Line>
    <Tag $index={index}>collabeditor.name</Tag>
  </>
}