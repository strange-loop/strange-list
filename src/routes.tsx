import * as React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Root from './root'

import HomePage from './pages/home-page'

export default () => {
	return (
		<BrowserRouter>
			<Root>
				<Route path='/' component={() => <HomePage store={{}} />} />
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
