import React, { Component } from 'react'
import utilsIndex from '@utils/index'
interface Props { }

export default class LoginPage extends Component<Props> {
    componentDidMount() {
        const id = utilsIndex.getUrlParam('id')
        console.log(id)

    }
    render() {
        return (
            <div>LoginPage</div>
        )
    }
}
