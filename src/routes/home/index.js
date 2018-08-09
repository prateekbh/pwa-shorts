import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import 'preact-material-components/Button/style.css';
import style from './style';
import { fetchNews, NEWS_FETCHED } from '../../actions/actions';
import NewsTile from './news-tile';

class Home extends Component {
	componentDidMount() {
		caches.match('api/fetch/national').then(response => {
			if (response && response.ok) {
				response.json().then(data => {
					(this.props.reducer.news.length === 0) && this.props.dispatch({
						type: NEWS_FETCHED,
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
			</div>
		);
	}
}

export default connect((state) =>
({
	reducer: state.reducer
})
)(Home);
