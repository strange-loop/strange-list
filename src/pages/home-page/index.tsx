import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'
import Tag from '../../components/tag'

import { Kora, Store } from '../../kora'
import { UUID } from '@ironbay/kora'

import Item from '../../structures/item'
import ItemEditor from '../../structures/item-editor'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
	}
	componentDidMount() {
		const editor = this.refs.editor as ItemEditor
		editor.edit({
			key: UUID.ascending(),
			title: 'New Item',
			referrer: '',
			tags: {},
			description: '',
			category: 'example',
		})
	}
	render() {
		return (
			<Container vertical align-center pad-8>
				<ItemEditor ref='editor' />
				<Container vertical wrap>
					<Text size-8 weight-5 mgn-v8>Example</Text>
					<Item />
				</Container>
			</Container>
		)
	}
}