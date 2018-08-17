import React, { Component } from 'react';
import './BibleVerse.css';

class BibleVerse extends Component {

  render() {
    return (
      <div className="BibleVerse">
        <div className="Slider__item__content">
          <div className="Slider__bible-text">
            <div className="BibleVerse__quote">&ldquo;</div>
            <div className="BibleVerse__verse">
              Come near to God,<br />
              and he will come near to you.
            </div>
            <div className="BibleVerse__address">
              <a href="https://www.biblegateway.com/passage/?search=James+4:8" target="_blank" rel="noopener noreferrer">
                <div className="text">James 4:8</div>
                <div className="line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default BibleVerse;
