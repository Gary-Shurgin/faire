import React from 'react'
import Label from './Label'
import { GridElement } from './Field'

const Group = (field, editing) =>
    <GridElement key={field.name}>
        {Label(field)}
        <div>
            {field.items.map(item => item.control(item, editing, field))}
        </div>
    </GridElement>

export default Group