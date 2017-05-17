import * as React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Root from './root'

import ListPage from './pages/list-page'

export default () => {
	return (
		<BrowserRouter>
			<Root>
				<Route path='/:list' component={ListPage} />
			</Root>
		</BrowserRouter>
	)
}


export class RouteHack extends React.Component<any, any> {
	render() {
		return (
			<BrowserRouter>
				{this.props.routes()}
			</BrowserRouter>
		)
	}
}
