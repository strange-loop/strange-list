import './styles.css'
import * as React from 'react'
import * as Moment from 'moment'

import Container from '../../components/container'
import Text from '../../components/text'
import Tag from '../../components/tag'

import { Kora, Store } from '../../kora'
import { UUID } from '@ironbay/kora'

import { Item } from '../../types'

import ItemCard from '../../structures/item-card'
import ItemEditor from '../../structures/item-editor'

export default class ListPage extends React.Component<any, any> {
	constructor() {
		super()
	}
	private last: string
	componentWillMount() {
		this.refresh(this.props)
	}
	componentWillReceiveProps(next) {
		this.refresh(next)
	}
	private refresh(props) {
		const { list } = this.props.match.params
		if (list !== this.last)
			Kora.query_path(['list:items', list])
		this.last = list
	}
	render() {
		const items = Store.get(['list:items', this.last]) || {}
		return (
			<Container vertical align-center pad-8>
				<ItemEditor ref='editor' onHide={() => this.edit({key: ''})} />
				<Container vertical wrap>
					<Container mgn-v8 align-right>
						<Text size-8 weight-5 grow>{this.last}</Text>
						<Text fg-blue uppercase weight-6 onClick={() => this.create()} cursor>Add</Text>
					</Container>
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
			category: this.last,
			created: Moment.now(),
		})
	}
	private edit(item: Item) {
		const editor = this.refs.editor as ItemEditor
		editor.edit(item)
	}
}