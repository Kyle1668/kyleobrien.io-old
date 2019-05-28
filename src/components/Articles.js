import React from "react";
import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard";
import articles from "../data/articles.json";

const AppDataContextInstance = React.createContext();

class Articles extends React.Component {
  //   componentWillMount = () => {
  //     this.setState({
  //       articles: articles.records
  //     });
  //   };

  renderArticles = () => {
    return (
      <AppDataContextInstance.Consumer>
        {context =>
          context.articles.map((article, key) => (
            <ArticleCard
              title={article.title}
              description={article.description}
              dateWritten={article.date_written}
              url={article.url}
              image={article.image}
              key={key * 11}
            />
          ))
        }
      </AppDataContextInstance.Consumer>
    );
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
