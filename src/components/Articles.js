import React from 'react';
import Navbar from './Navbar';
import ArticleCard from './ArticleCard';

class Articles extends React.Component {
	constructor() {
		super();
		this.state = {
			articles: [
				{
					title: 'Build a Movie Data API With Python: Part 1',
					description:
						'Part 1 in a tutorial series on how to build a movie data API with Flask, Postgre' +
						's, and Docker.',
					date_written: 'Aug 4, 2018  ',
					url:
						'https://medium.com/@kyleobrien1668/build-a-movie-data-api-with-python-part-1-439' +
						'6bd72845',
					image:
						'https://cdn-images-1.medium.com/max/1600/1*mOhEA3sO1Y2X_ldrtmw2NA.png'
				},
				{
					title: 'Generic Functions: C++ Templates',
					description:
						'A brief overview on the syntax of C++ template functions.',
					date_written: 'Mar 31, 2017',
					url:
						'https://medium.com/@kyleobrien1668/generic-functions-c-templates-8d2c084212d8',
					image:
						'https://cdn-images-1.medium.com/max/1600/1*FGw70I8yl5ETMvjvqnCCqQ.png'
				}
			]
		};
	}

	getArticles = () => {
		const backendPort = process.env.BACKENDPORT || 4000;
		const backendHost = process.env.BACKENDHOST || 'localhost';
		const url = `http://${'localhost'}:${backendPort}/api/articles`;
		console.log(url);

		fetch(url, { mode: 'cors' })
			.then(res => {
				return res.json();
			})
			.then(jsonData => {
				this.setState({ articles: jsonData.results });
			})
			.then(() => {
				console.log(this.state.articles);
			})
			.catch(err => {
				console.log('Error reaching articles API endpoint');
				console.log(err);
			});
	};

	componentDidMount = () => {
		// this.getArticles()
	};

	renderArticles = () => {
		if (this.state.articles.length > 0) {
			return this.state.articles.map((article, key) => {
				if (key + 1 <= 2) {
					console.log(article);
					console.log(key);
					console.log(article.title);

					return (
						<ArticleCard
							title={article.title}
							description={article.description}
							dateWritten={article.date_written}
							url={article.url}
							image={article.image}
							key={key * 11}
						/>
					);
				}
			});
		}
	};

	render() {
		return (
			<div className="about">
				<Navbar isFixed={false} />
				<div className="jumbotron">
					<div className="container">
						<div className="row">
							<div className="body-heading col-md-12">
								<h1>Articles</h1>
								<hr className="my-4" />
							</div>
						</div>
						<div className="row">
							<div className="container paragraph-container">
								<div className="row">
									<div className="col-md-8 offset-md-2">
										{this.renderArticles()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Articles;
