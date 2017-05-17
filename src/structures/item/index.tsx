import './styles.css'
import * as React from 'react'

import Modal from '../../components/modal'
import Container from '../../components/container'
import Text from '../../components/text'
import Tag from '../../components/tag'
import { editor, Input, InputTags, InputRow, InputBlock, InputLabel, InputArea } from '../../components/form'

import { Kora, Store } from '../../kora'

export default class ItemEditor extends React.Component<any, any> {
	constructor() {
		super()
	}
	public edit(item) {
		this.setState(item)
	}
	render() {
		return (
			<Container vertical pad-8 bg-white border mgn-b8>
				<Text size-5 weight-5>Some Title</Text>
				<Text size-4 fg-gray mgn-t2>added by Dax five days ago</Text>
				<Container mgn-t3>
					<Tag fg-blue mgn-r3>Hello</Tag>
					<Tag fg-blue mgn-r3>Bye</Tag>
				</Container>
				<Text fg-gray line-8 mgn-t3>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum sem sit amet ultricies lacinia. Nulla et varius elit. Duis sed tristique mi, sit amet lacinia nisi. Etiam in nunc et est interdum placerat vel ut elit. Integer feugiat lobortis purus, vitae iaculis lorem. Fusce sed turpis tellus. Vestibulum gravida mauris eget mi fermentum bibendum.
				</Text>
			</Container>
		)
	}

}
