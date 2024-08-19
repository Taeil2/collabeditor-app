import styled from 'styled-components'

import Modal from '@/components/Modal'

import Button from '@/components/Button'
import { useState } from 'react'
import { grays } from '@/styles/styles'

import { useCombobox, useSelect } from 'downshift'

const Form = styled.form`
  label {
    display: block;
    font-size: 16px;
    color: ${grays.gray6};
    margin-bottom: 10px;
  }
`

const names = ['taeil', 'taki', 'tahoe', 'taco']

export default function CollabeditorsModal() {
  const [] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Modal closeButton={true}>
      <Form onSubmit={onSubmit}>
        <h4>Collabeditors</h4>
        <h5>Add Collabeditor</h5>
        <Form onSubmit={onSubmit}>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label for="permissions">Permissions</label>
            <select id="permissions">
              <option>all</option>
              <option>edit</option>
              <option>view</option>
            </select>
          </div>
        </Form>
        <label for="name">What is your name?</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder=""
          onChange={(e) => {
            setName(e.target.value)
          }}
          autofocus
        ></input>
        <Button type="submit" text="okay" />
      </Form>
    </Modal>
  )
}
