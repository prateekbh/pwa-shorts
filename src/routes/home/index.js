import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';
import style from './style';
import { fetchNews, STALE_NEWS_FETCHED } from '../../actions/actions';
import NewsTile from './news-tile';

class Home extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.bar.MDComponent.show({
				message: 'Fetching fresh content.'
			});
		}, 500);
		caches.match('api/fetch/national').then(response => {
			if (response && response.ok) {
				response.json().then(data => {
					(this.props.reducer.news.length === 0) && this.props.dispatch({
						type: STALE_NEWS_FETCHED,
						data
					});
				});
			}
		});
		this.props.dispatch(fetchNews());
	}
	render(props) {
		return (
			<div class={style.home}>
				{props.reducer.news.map(news => <NewsTile news={news} />)}
				<Snackbar ref={bar => {
					this.bar=bar;
					window.snackbar = bar;
				}}
				/>
			</div>
		);
	}
}

export default connect((state) =>
({
	reducer: state.reducer
})
)(Home);
