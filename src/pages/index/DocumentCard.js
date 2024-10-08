import styled from 'styled-components'
import { grays } from '@/styles/styles'

import { Link } from 'react-router-dom'

import Collabeditor from '@/components/Collabeditor'
import Button from '@/components/Button'

import { FaRegTrashAlt } from 'react-icons/fa'

const Card = styled.div`
  display: grid;
  grid-template-columns: auto 161px 111px;
  column-gap: 20px;
  border-radius: 5px;
  border: 1px solid ${grays.gray4};
  padding: 20px;
  padding-top: 9px;
  background: #fff;
  margin-bottom: 30px;
  cursor: pointer;
  > div:first-of-type {
    p {
      color: ${grays.gray6};
    }
  }
  > div:not(:first-of-type) {
    padding-top: 24px;
    h6 {
      margin-bottom: 10px;
    }
  }
  > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 16px;
      color: ${grays.gray5};
      margin-top: -5px;
    }
    button {
      align-self: end;
    }
  }
`

export default function DocumentCard(props) {
  const { document } = props

  return (
    <Link href="/document">
      <Card>
        <div>
          <h3>{document?.name}</h3>
          <p>{document?.content}</p>
        </div>
        <div>
          <h6>collabeditors</h6>
          <Collabeditor collabeditor={document?.owner} index={0} />
          {document?.collabeditors.map((collabeditor, i) => (
            <Collabeditor
              collabeditor={collabeditor}
              index={i + 1}
              key={`collabeditor-${i + 1}`}
            />
          ))}
        </div>
        <div>
          <div>
            <h6>updated</h6>
            <p>{document?.updated}</p>
          </div>
          <Button
            icon={<FaRegTrashAlt />}
            onClick={() => {
              console.log('clicked')
            }}
            color="red"
          />
        </div>
      </Card>
    </Link>
  )
}
