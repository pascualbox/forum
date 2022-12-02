/** @format */

import React from "react";

import PostHeader from "./components/postHeader/PostHeader";
import PostBody from "./components/postBody/PostBody";

function Post(props) {
  return (
    <div>
      {props.array.map((element) => (
        <div
          id={props.id}
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <PostHeader title="Pepe" category="Masajista de Tello" />
            <hr className="separator"></hr>
            <PostBody content={content} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Post;
