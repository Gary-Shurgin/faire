import React from 'react'
import GoChevronLeft from 'react-icons/lib/go/chevron-left'
import GoChevronRight from 'react-icons/lib/go/chevron-right'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'

const JumpBar = ({index, max, check, action}) => {
    return <div>
        <button disabled={check.atTop(index)}
                onClick={() => action.first(index)}>
            <FaAngleDoubleLeft /></button>
        <button disabled={check.atTop(index)}
                onClick={() => action.prev(index)}>
                <GoChevronLeft /></button>
        &nbsp;{index+1} of {max}&nbsp;
        <button disabled={check.atEnd(index)}
                onClick={() => action.next(index)}>
            <GoChevronRight /></button>
        <button disabled={check.atEnd(index)}
                onClick={() => action.last(index)}>
            <FaAngleDoubleRight /></button>
    </div>
}

export default JumpBar