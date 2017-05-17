import './styles.css'
import * as React from 'react'

import Modal from '../../components/modal'
import Container from '../../components/container'
import Text from '../../components/text'
import { editor, Input, InputTags, InputRow, InputBlock, InputLabel, InputArea } from '../../components/form'

import { Kora, Store } from '../../kora'
import { Item } from '../../types'

interface IProps {
	item: Item
}

export default class ItemEditor extends React.Component<any, IProps> {
	private initial: Item
	constructor() {
		super()
		this.state = {
			item: {
				key: '',
			}
		}
	}
	public edit(item: Item) {
		this.setState({
			item
		})
	}
	render() {
		const { item } = this.state
		return (
			<Modal active={item.key !== ''}>
				<Container pad-8 vertical>
					<Text size-5 weight-5>Edit Item</Text>
				</Container>
				<Container vertical>
					<InputRow>
						<InputBlock border-r>
							<InputLabel>Title</InputLabel>
							<Input
								value={item.title || ''}
								placeholder='Name of item'
								onChange={editor.bind(this, 'title')}/>
						</InputBlock>
						<InputBlock>
							<InputLabel>Added By</InputLabel>
							<Input
								value={item.referrer || ''}
								placeholder='Name of referrer'
								onChange={editor.bind(this, 'referrer')}/>
						</InputBlock>
					</InputRow>
					<InputRow>
						<InputBlock border-r>
							<InputLabel>Description</InputLabel>
							<InputArea
								value={item.description || ''}
								rows={5}
								placeholder='Description of item'
								onChange={editor.bind(this, 'description')} />
						</InputBlock>
					</InputRow>
					<InputRow>
						<InputBlock>
							<InputLabel>Tags</InputLabel>
							<InputTags placeholder='Add tag...' value={item.tags || {}} onChange={editor.bind(this, 'tags')} />
						</InputBlock>
					</InputRow>
				</Container>
				<Container onClick={this.handle_save} cursor bg-blue pad-6 justify-center>
					<Text fg-white weight-5 >Save</Text>
				</Container>
			</Modal>
		)
	}
	private handle_save = () => {
		const { item } = this.state
		this.edit({
			key: ''
		})
		Kora.mutation({
			merge: {
				'list:items': {
					[item.category]: {
						[item.key]:  item
					}
				}
			},
		})
	}

}
