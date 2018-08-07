import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import { FETCH_NEWS } from '../../actions/actions';

class Home extends Component {
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div class={style.home}>

			</div>
		);
	}
}

export default connect((state) =>
	({
		reducer: state.reducer
	})
)(Home);