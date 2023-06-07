import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, source} = this.props;
    return (
      <div>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'   
          }}>

        <span className="badge rounded-pill bg-danger" style={{left:'93%', zIndex:'1'}}>{source}</span>
          </div>
          <img
            src={
              !imageUrl ? "element.urlToImage?element.urlToImage:" : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark my-2"
            >
              Read More
            </a>
            <div className="card-footer">
              <small className="text-body-secondary">
                Published on {new Date(date).toGMTString()}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
