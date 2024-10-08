import styled from 'styled-components'
import { useState } from 'react'
import { colors } from '@/styles/styles'

import { Link } from 'react-router-dom'

import Button from '@/components/Button'
import Collabeditor from '@/components/Collabeditor'
import CollabeditorsModal from './CollabeditorsModal'

import { IoIosArrowBack } from 'react-icons/io'
import { IoPeople } from 'react-icons/io5'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  > div:first-of-type {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 30px;
    a {
      color: ${colors.blue};
    }
    input {
      margin-top: 8px;
      display: block;
      width: 100%;
      background: transparent;
      border: 0;
      font-family: Open Sans;
      font-size: 32px;
    }
  }
  > div:last-of-type {
    margin-top: 32px;
    button {
      margin-left: 10px;
    }
  }
`

export default function Header(props) {
  const [collabeditorsOpen, setCollabeditorsOpen] = useState(false)
  const { document } = props

  return (
    <Container>
      <div>
        <Link href="/">
          <IoIosArrowBack /> back to documents
        </Link>
        <input type="text" placeholder="Document Name" />
      </div>
      <div>
        <Collabeditor
          collabeditor={document?.owner}
          index={0}
          key={`collabeditor-0`}
        />
        {document?.collabeditors.map((collabeditor, i) => (
          <Collabeditor
            collabeditor={collabeditor}
            index={i + 1}
            key={`collabeditor-0${i + 1}`}
          />
        ))}
        <Button
          icon={<IoPeople />}
          text="collabeditors"
          onClick={() => {
            setCollabeditorsOpen(true)
          }}
        />
        {collabeditorsOpen && <CollabeditorsModal document={document} />}
      </div>
    </Container>
  )
}
