import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';
import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import store from './store';
import { STALE_NEWS_FETCHED } from '../actions/actions';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	componentDidMount() {
		caches.match('https://prateekbh.lib.id/news@dev/national/').then(response => {
			if (response && response.ok) {
				response.json().then(data => {
					(store.getState().reducer.news.length === 0) && store.dispatch({
						type: STALE_NEWS_FETCHED,
						data
					});
				});
			}
			setTimeout(() => {
				if (window.snackbar) {
					window.snackbar.MDComponent.show({
						message: 'Fetching fresh content.'
					});
				}
			}, 500);
		});
	}
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/news/:md5" user="me" />
					</Router>
				</div>
			</Provider>
		);
	}
}
