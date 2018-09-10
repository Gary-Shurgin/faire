import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.span`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  /* background: transparent; */
  color: darkgreen;
  border: 1px solid darkgreen;
  font-weight: bold;

  ${props => props.primary && css`
    background: lightgreen;
    color: darkgreen;
  `}
`

const Edit = () => <button>Edit</button>
const Add = () => <button>Add</button>
const Update = () => <button>Update</button>
const Cancel = () => <Button primary type='submit'>Cancel</Button>

const editButtons = (isNew) =>
    <div>
        {isNew ? <Add /> : <Update />}
        <Cancel />
    </div>

const GridElement = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-column-gap: 5px;
    margin-top: 1em;    
`

const Buttons = ({editing, isNew}) => 
    <GridElement>
        <p></p>
        {editing ? editButtons(isNew) : <Edit />}
    </GridElement>

export default Buttons