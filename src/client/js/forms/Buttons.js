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
const Add = ({allow}) => <button>Add [{allow}]</button>
const Update = () => <button>Update</button>
const Cancel = () => <Button primary type='submit'>Cancel</Button>

const editButtons = (isNew, allow) =>
    <div>
        {isNew ? <Add allow={allow}/> : <Update allow={allow}/>}
        <Cancel />
    </div>

const GridElement = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-column-gap: 5px;
    margin-top: 1em;    
`

const Buttons = ({props, isNew}) => 
    <GridElement>
        <p></p>
        {props.editing ? editButtons(isNew, props.dirty && props.valid) : <Edit />}
    </GridElement>

export default Buttons