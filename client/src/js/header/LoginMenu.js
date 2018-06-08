import React from 'react'
import { connect } from 'react-redux'
import { check, action } from './MenuType'
import { mapStateToProps } from '../person/PersonData'

const checkDisable = (check) => {
    return ['ans-menu-button', check ? 'ans-disabled' : ''].join(' ')
}

const LoginMenu = ({menu, editing, person}) => {
    return <div className='ans-right-menu'>
        <div className={checkDisable(check.isLogin(menu))}
                onClick={() => action.setLogin(menu)}>
            {person.id ? person.scaName : 'Login' }
        </div>
    </div>
}

export default connect(mapStateToProps)(LoginMenu);