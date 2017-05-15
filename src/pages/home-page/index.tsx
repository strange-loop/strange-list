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
		return (
			<Container vertical pad-l>
				<Text s preserve>
				{
					JSON.stringify(store.get([]), null, '\t')
				}
				</Text>
			</Container>
		)
	}
}
