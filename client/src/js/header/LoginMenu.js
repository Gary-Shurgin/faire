import React from 'react'
import { connect } from 'react-redux'
import { check, action, mapStateToProps } from './MenuType'
import { mapStateToProps as personData } from '../person/PersonData'

const checkDisable = (check) => {
    return ['ans-menu-button', check ? 'ans-disabled' : ''].join(' ')
}

const LoginMenu = ({menu, person}) => {
    console.log('menu', menu, person)
    return <div className='ans-right-menu'>
        <div className={checkDisable(check.isLogin(menu))}
                onClick={() => action.setLogin(menu)}>
            {person ? person.scaName : 'Login' }
        </div>
    </div>
}

export default connect(mapStateToProps)(LoginMenu);