import './reset.css'
import './styles.css'
import * as React from 'react'
import { kora, store } from '../kora'

import Container from '../components/container'

export default class Root extends React.Component<any, any> {
	constructor() {
		super()
	}
	componentDidMount() {
		store.onChanged.add(() => {
			this.forceUpdate()
		})
	}
	render() {
		return (
			<Container vertical>
				{
					React.cloneElement(this.props.children)
				}
			</Container>
		)
	}
}
