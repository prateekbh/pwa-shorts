const NEWS_FETCHED = 'NEWS_FETCHED';

function fetchNews(offset) {
	return dispatch => {
		fetch('/api/fetch/national')
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: NEWS_FETCHED,
					data: json
				});
			});
	};
}

export {
	fetchNews,
	NEWS_FETCHED
}
