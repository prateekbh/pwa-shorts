import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';
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
