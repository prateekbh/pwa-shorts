import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Card/style.css';
import style from './style';
import { fetchNews } from '../../actions/actions';

export default class NewsTile extends Component {
	componentDidMount() {

	}
	render(props) {
		return (
			<Card class={style.news}>
				<a class={style.cardHeader} style={`background-image:url(${props.news.img})`}>
          <div class={style["headline-shadow"]}>
            <div>
              <Typography headline6 class={style.headline}>
                {props.news.headline}
              </Typography>
            </div>
            <div>
              <Typography caption class={style.headline}>
                by {props.news.author}
              </Typography>
            </div>
          </div>
				</a>
			</Card>
		);
	}
}
