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
			}).catch(e => {
				if (window.snackbar) {
					window.snackbar.MDComponent.show({
						message: 'Content fetching failed.'
					});
				}
			});
	};
}

export {
	fetchNews,
	NEWS_FETCHED
}
