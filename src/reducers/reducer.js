import { NEWS_FETCHED, STALE_NEWS_FETCHED } from '../actions/actions';
import md5 from 'md5';

export default function gameReducer(state = { news: [], newsIndex: {} }, action) {
	switch (action.type) {
		case STALE_NEWS_FETCHED:
		case NEWS_FETCHED: {
			const data = action.data;
			const newState = {
				news: state.staleNews ? [] : Object.assign([], state.news),
				newsIndex: state.staleNews ? {} : Object.assign({}, state.newsIndex)
			};
			data.news.forEach(news => {
				const newsMd5 = md5(news.body);
				if (!newState.newsIndex[newsMd5]) {
					news.md5 = newsMd5;
					newState.news.push(news);
					newState.newsIndex[newsMd5] = newState.news.length - 1;
				}
			});
			newState.staleNews = (action.type === STALE_NEWS_FETCHED);
			return newState;
		}
		default:
			return state;
	}
}