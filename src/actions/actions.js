const NEWS_FETCHED = 'NEWS_FETCHED';
const STALE_NEWS_FETCHED = 'STALE_NEWS_FETCHED';

function fetchNews(offset) {
	return dispatch => {
		fetch('https://prateekbh.lib.id/news@dev/national/')
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
	NEWS_FETCHED,
	STALE_NEWS_FETCHED
};
