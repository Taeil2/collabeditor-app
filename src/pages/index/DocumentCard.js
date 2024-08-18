import styled from 'styled-components'
import { grays } from '@/styles/styles'

import Collabeditor from '@/components/Collabeditor'
import Button from '@/components/Button'

import { FaRegTrashAlt } from "react-icons/fa";

const Card = styled.div`
  display: grid;
  grid-template-columns: auto 200px 200px;
  border-radius: 5px;
  border: 1px solid ${grays.gray4};
  padding: 20px;
  padding-top: 9px;
  background: #fff;
  > div:first-of-type {
    p {
      color: ${grays.gray6}
    }
  }
  > div:not(:first-of-type) {
    padding-top: 10px;
  }
`

const Description = styled.p`
  font-size: 14px;
  color: ${grays.gray7};
`

const UpdatedContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default function DocumentCard(props) {
  const { document } = props

  return <Card>
    <div>
      <h3>{document.name}</h3>
      <p>{document.content}</p>
    </div>
    <div>
      <h6>collabeditors</h6>
      <Collabeditor collabeditor={document.owner} index={0} />
      {
        document.collabeditors.map((collabeditor, i) => {
          <Collabeditor collabeditor={collabeditor} index={i + 1} />
        })
      }
    </div>
    <div>
      <h6>updated</h6>
      <Description>{document.updated}</Description>
      <Button
        icon={<FaRegTrashAlt />}
        onClick={() => {
          console.log('clicked') }
        }
        color="red" />
    </div>
  </Card>
}