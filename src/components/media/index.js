import React, { Component } from "react";
import DAOVideo from "../../assets/video/what_is_a_dao.mp4";
import ReactPlayer from "react-player";
import "./style.scss";

export default class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      governor: [],
      jeff: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dunk`
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({ jeff: response.items });
      })
      .catch((err) => null);
  }

  render() {
    const articles = [
      ...this.state.jeff.filter(
        (a) =>
          a.categories.includes("gdao") || a.categories.includes("governor")
      ),
      ...this.state.governor,
    ];

    articles.sort((a, b) =>
      new Date(a.pubDate) < new Date(b.pubDate) ? 1 : -1
    );

    return (
      <div className="media-gradient-bg">
        <div className="max-width-container">
          <div className="media-container">
            <div className="media-content">
              <h1>Governor in Media</h1>
              <h2>Video content</h2>
              <div className="video-item">
                <div className="video-title">What is a DAO?</div>
                <div className="dao-player-container">
                  <ReactPlayer
                    className="dao-player-content"
                    url={DAOVideo}
                    controls
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div>
              <h2>Medium articles</h2>
              {articles.map((article, index) => (
                <a
                  key={index}
                  className="medium-card"
                  href={article.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={article.thumbnail} draggable={false} alt="" />
                  <div className="medium-card-content">
                    <div className="title">{article.title}</div>
                    <div className="category-container">
                      {article?.categories.map((category, index) => (
                        <div key={index} className="category">
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="medium-card-bottom">
                    <div className="author">{article.author}</div>
                    <div className="pubdate">
                      {article.pubDate.substring(0, 10)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
