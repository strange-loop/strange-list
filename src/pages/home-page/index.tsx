import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'
import { kora, store } from '../../kora'


export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
	}
	render() {
		console.log('Home Page')
		return (
			<Container vertical pad-l >
				<pre>
				{
					JSON.stringify(store.get([]), null, '\t')
				}
				</pre>
			</Container>
		)
	}
}
