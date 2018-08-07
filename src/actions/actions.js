const NEWS_FETCHED = 'NEWS_FETCHED';

function FETCH_NEWS(offset) {
	return dispatch => {
		fetch(`/api/fetch/national?offset=${offset}`)
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: 'NEWS_FETCHED',
					data: json
				});
			});
	};
}

export {
	FETCH_NEWS,
	NEWS_FETCHED
};
