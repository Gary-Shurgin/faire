import React from 'react'
import { connect } from 'react-redux'
import { check, action, mapStateToProps } from './NotesAction'
import JumpBar from '../util/JumpBar'

const Notes = ({index, max, date, text}) => {
    let count = 0
    return <div>
        <p className='ans-title'>Notes</p>
        <div className='ans-box'>
            <div className='ans-box-line'>
                <div className='ans-box-left'>
                    <span><b>Date:</b> {date}</span>
                </div>
                <div className='ans-box-right'>
                    <JumpBar {...{index, max, check, action}} />
                </div>
            </div>
            <br style={{overflow: 'auto'}}/>
            <hr style={{backgroundColor: 'green', height: '2px'}}/>
            <div>
                {text.map(line => (
                    <div key={count++} dangerouslySetInnerHTML={{__html: line}}></div>)
                )}
            </div>
        </div>
    </div>
}

export default connect(mapStateToProps)(Notes)