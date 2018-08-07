import { NEWS_FETCHED } from '../actions/actions';


export default function gameReducer(state = { news: [] }, action) {
	switch (action.type) {
		case NEWS_FETCHED: {
			return (Object.assign({}, state, action.data));
		}
		default:
			return state;
	}
}