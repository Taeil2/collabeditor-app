import styled from "styled-components";

import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";

import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  > div:first-of-type {
    display: flex;
    align-items: center;
  }
  h2 {
    display: inline-block;
    margin-right: 30px;
  }
`

export default function Header() {
  return <Container>
    <div>
      <h2>Documents</h2>
      <Button
        icon={<FaPlus />}
        text="new document"
        onClick={() => { console.log('clicked') }}
      />
    </div>
    <ButtonGroup buttons={[
      {
        icon: <FaPen />,
        text: "change name",
        onClick: () => { console.log('clicked') },
      },
      {
        icon: <MdLogout />,
        text: "log out",
        onClick: () => { console.log('clicked') },
      },
    ]} />
    </Container>
  
}