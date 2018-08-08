const fetch = require('isomorphic-fetch');
const { JSDOM } = require('jsdom');
const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());

app.get('/api/fetch/:category', (req, res) => {
	const offset = req.query.offset || '';
	res.setHeader('Content-type', 'application/json');
	fetchFromAPI(req.params.category, offset).then(response => {
		res.send(JSON.stringify(response));
	});
	// not used
	// if (offset) {

	// } else {
	// 	fetchFromDoc(req.params.category).then(response => {
	// 		res.send(JSON.stringify(response));
	// 	});
	// }
});

app.use(express.static('build'));

function fetchFromAPI(category, news_offset) {
	return fetch(`https://inshorts.com/en/ajax/more_news`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		body: `category=${category}&news_offset=${news_offset}`
	})
		.then(response => response.json())
		.then(res => ({ offset: res['min_news_id'], news: getNewsFromDOM(res.html) }));

}

function fetchFromDoc(category) {
	return fetch(`https://inshorts.com/read/${category}`)
		.then(response => response.text())
		.then(text => {
			const newsOffsetRegexp = new RegExp(/min_news_id = "(\w{8}-\d{1})";/gm);
			return {
				offset: newsOffsetRegexp.exec(text)[1],
				news: getNewsFromDOM(text),
			};
		});
}

function getNewsFromDOM(domText) {
	const dom = new JSDOM(domText).window.document;
	const imgRegExp = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/);
	const newsData = [];
	dom.querySelectorAll('.news-card').forEach(news => {
		const headline = news.querySelector('[itemprop=headline]').innerHTML;
		const body = news.querySelector('[itemprop=articleBody]').innerHTML;
		const img = news.querySelector('.news-card-image') ? news.querySelector('.news-card-image').getAttribute('style') : '';
		const author = news.querySelector('.author') ? news.querySelector('.author').innerHTML : '';
		const date = news.querySelector('.date') ? news.querySelector('.date').innerHTML : '';
		newsData.push({
			headline,
			body,
			img: `${imgRegExp.exec(img)[0]}400px:*`,
			author,
			date

		});
	});
	return newsData;
}


const port = process.env.PORT || 15000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))