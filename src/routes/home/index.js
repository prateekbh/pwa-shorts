import { h, Component } from 'preact';
import {useEffect} from 'preact/hooks';
import { connect } from 'preact-redux';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';
import style from './style';
import { fetchNews } from '../../actions/actions';
import NewsTile from './news-tile';

const Home = (props) => {
	useEffect(() => {
		console.log('hi')
		this.props.dispatch(fetchNews());
	}, []);
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

export default connect((state) =>
({
	reducer: state.reducer
})
)(Home);
