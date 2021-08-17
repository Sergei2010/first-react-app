import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello World меня зовут: * Сергей Матвейчук *</h1>

ReactDOM.render(element, document.getElementById('root'))
if (module.hot) {
	module.hot.accept();
 }