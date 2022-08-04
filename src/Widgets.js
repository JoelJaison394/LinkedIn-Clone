import React from 'react'
import "./Widgets.css";
import { FaInfoCircle } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_article_left">
        <FaNewspaper />

      </div>

      <div className="widgets_article_right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <FaInfoCircle />
      </div>

      {newsArticle("REACT Js ", "new job openings")}
      {newsArticle("REACT Js ", "new job openings")}
      {newsArticle("REACT Js ", "new job openings")}
      {newsArticle("REACT Js ", "new job openings")}
      {newsArticle("REACT Js ", "new job openings")}

    </div>
  )
}

export default Widgets