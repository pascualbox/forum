/** @format */

import React from "react";
import "./PostHeader.scss";

function PostHeader(props) {
  return (
    <div className="postHeader">
      <div className="postHeaderLeftDiv">
        <img></img>
      </div>
      <div className="postHeaderCenterDiv">
        <div className="titleDiv">{props.title}</div>
        <div className="categoryDiv">{props.category}</div>
      </div>
      <div className="postHeaderRightDiv"></div>
    </div>
  );
}

export default PostHeader;
