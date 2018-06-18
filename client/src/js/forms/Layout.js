import React, { Component } from 'react'
import Field from './Field'
import Select from './Select'
import GroupCheckbox from './GroupCheckbox'

const select = ({ id, label, required, items }, state, change) => (
    <Select key={id} text={label} 
            name={id}
            value={state[id]} 
            items={items} 
            onClick={change}
            required={required}/> 
)

const group = ({ id, label, items }, state, change) => (
    <GroupCheckbox key={id} text={label}
            items={items}
            values={state}
            onClick={change} />
)

const input = ({ id, label, required, focus }, state, change) => (
    <Field name={id} key={id}
            text={label}
            onChange={change}
            value={state[id]}
            autoFocus={focus} 
            required={required} />
)

export const initItems = (fields) => {
    const obj = {}
    fields.map(({id, type, init, items}) => {
        switch(type) {
        case 'group':
            return items.map(item => {
                obj[item.id] = item.init ? item.init : false
            })
        }
        return obj[id] = init ? init : ''
    })
    return obj
}

export const renderItem = (field, state, change) => {
    switch (field.type) {
        case 'select':
            return select(field, state, change)
        case 'group':
            return group(field, state, change)
    }
    return input(field, state, change)
}
