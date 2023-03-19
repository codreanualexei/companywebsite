import React from 'react';
import { Slide } from "react-reveal";
import { Link } from "react-router-dom";
import { NewsCard } from '../../cards';
import { newsData } from '../../staticData/staticData';
import './news.css'

const News = () => {
  return (
    <div className="news__">
    <Slide bottom>
      <div className="news__Header">
        <h2 className="news__HeaderTitle">News</h2>
        <p className="news__HeaderText">
        Read the latest stories from our world.
        </p>
      </div>
    </Slide>
    <div className="news__items">
{
    newsData?.map(({title,text}, index) => (
          <NewsCard title={title} text={text} key={index}/>

    ))
}
</div>
<button className="news__btn">
        <Link to="/all-news">SEE ALL NEWS</Link>
      </button>
</div>
  )
}

export default News