import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class NewsAbbreviate extends Component {
  render(props) {
    return(
      <Card>
        <div class={style.cardHeader} style={`background-image: url(${props.img})`}>
        </div>
        <div class={style.cardBody}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </div>
        <Card.Actions>
          <Card.ActionButton>OKAY</Card.ActionButton>
        </Card.Actions>
      </Card>
    );
  }
}
