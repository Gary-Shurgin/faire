import React from 'react'
import { connect } from 'react-redux'
import { action, check, mapStateToProps } from './MenuType'

const checkDisable = (check) => {
    return ['ans-menu-button', check ? 'ans-disabled' : ''].join(' ')
}

const MenuBar = (props) => {
    const { menu } = props
    return <div className='ans-left-menu'>
        <div className={checkDisable(check.isHome(menu))}
                onClick={() => action.setHome(menu)}>
            Home
        </div>
        <div className={checkDisable(check.isRules(menu))} 
                onClick={() => action.setRules(menu)}>
            Rules
        </div>
        <div className={checkDisable(check.isCriteria(menu))}
                onClick={() => action.setCriteria(menu)}>
            Criteria
        </div>
    </div>
}

export default connect(mapStateToProps)(MenuBar)