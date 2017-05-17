import './styles.css'
import * as React from 'react'

import Modal from '../../components/modal'
import Container from '../../components/container'
import Text from '../../components/text'
import Tag from '../../components/tag'
import { editor, Input, InputTags, InputRow, InputBlock, InputLabel, InputArea } from '../../components/form'

import { Kora, Store } from '../../kora'
import { Item } from '../../types'

interface IProps {
	item: Item,
	onClick: () => void
}

export default class ItemCard extends React.Component<IProps, any> {
	constructor() {
		super()
	}
	render() {
		const { item, onClick } = this.props
		return (
			<Container onClick={onClick} vertical pad-8 bg-white border mgn-b8>
				<Text size-5 weight-5>{item.title}</Text>
				<Text size-4 fg-gray mgn-t2>added by {item.referrer} five days ago</Text>
				<Container mgn-t3>
				{
					Object.keys(item.tags || {}).map(item => <Tag key={item} fg-blue mgn-r3>{item}</Tag>)
				}
				</Container>
				<Text fg-gray line-8 mgn-t2>
                {item.description || 'No Description'}
				</Text>
			</Container>
		)
	}

}
