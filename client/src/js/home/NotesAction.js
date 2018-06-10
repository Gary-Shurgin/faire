import store from '../store/index'
 
const SET_NOTE = 'setNote'

const noteData = [
    {
        date: "2018-06-100",
        text: [
            'Complete adding a Person (not to database).',
        ]
    },
    {
        date: "2018-05-20",
        text: [
            'Add Notes and Next section on the Home page.',
        ]
    },
    {
        date: "2018-05-14",
        text: [
            'Initial Version',
            'Menu buttons are working, except for "Login".',
        ]
    },
]

const init = {
    index: 0,
    item: noteData[0],
    max: noteData.length
}

export const mapStateToProps = state => ({
    index: state.note.index,
    max: state.note.max,
    date: state.note.item.date,
    text: state.note.item.text,
})

export const check = {
    atTop: (index) => index <= 0,
    atEnd: (index) => index >= noteData.length - 1
}

const _setNext = (index, check, payload) => {
    if ( !check(index) ) {
        store.dispatch({
            type: SET_NOTE,
            payload: payload,
        })
    }
}

export const action = {
    next: (index) => _setNext(index, check.atEnd, index+1),
    prev: (index) => _setNext(index, check.atTop, index-1),
    first: (index) => _setNext(index, check.atTop, 0),
    last: (index) => _setNext(index, check.atEnd, noteData.length-1),
}

export const noteReducer = (state = init, action) => {
    switch(action.type) {
    case SET_NOTE:
        return {
            index: action.payload,
            item: noteData[action.payload],
            max: noteData.length,
        }
    }
    return state
}


