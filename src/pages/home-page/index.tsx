import './styles.css'
import * as React from 'react'

import Container from '../../components/container'
import Text from '../../components/text'
import Tag from '../../components/tag'

import { Kora, Store } from '../../kora'
import { UUID } from '@ironbay/kora'

import { Item } from '../../types'

import ItemCard from '../../structures/item-card'
import ItemEditor from '../../structures/item-editor'

export default class HomePage extends React.Component<any, any> {
	constructor() {
		super()
	}
	componentDidMount() {
		this.create()
	}
	render() {
		const items = Store.get(['list:items', 'example']) || {}
		return (
			<Container vertical align-center pad-8>
				<ItemEditor ref='editor' />
				<Container vertical wrap>
					<Text size-8 weight-5 mgn-v8 onClick={() => this.create()}>Example</Text>
					{
						Object.keys(items).map(key => {
							const target = items[key]
							return (
								<ItemCard onClick={() => this.edit(target)} key={key} item={target} />
							)
						})
					}
				</Container>
			</Container>
		)
	}
	private create() {
		this.edit({
			key: UUID.ascending(),
			category: 'example',
		})
	}
	private edit(item: Item) {
		const editor = this.refs.editor as ItemEditor
		editor.edit(item)
	}
}