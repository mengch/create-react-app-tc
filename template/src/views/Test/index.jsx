import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TopBar from 'components/TopBar'

import Img from './img/react.logo.svg'

import './index.scss'

class MyComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                Hello ~
                <img src={Img} alt=""/>
                <TopBar/>
            </div>
        )
    }
}

function doRender() {
    ReactDOM.render(<MyComponent />, document.getElementById("app"));
}

setTimeout(doRender, 16);