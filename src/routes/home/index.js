import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import { fetchNews } from '../../actions/actions';
import NewsTile from './news-tile';

class Home extends Component {
	componentDidMount() {
		this.props.dispatch(fetchNews());
	}
	render(props) {
		return (
			<div class={style.home}>
				{props.reducer.news.map(news=> {
					return (
						<NewsTile news={news}/>
					);
				})}
			</div>
		);
	}
}

export default connect((state) =>
({
	reducer: state.reducer
})
)(Home);
