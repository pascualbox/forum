import React from "react";
import PostHeader from "../postHeader/PostHeader";
import PostBody from "../postBody/PostBody";
import "./Post.scss";

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
            <div className="content">
              <PostHeader title="Pepe" category="Masajista de Tello" />
              <hr className="hr" />
              <PostBody content={element} />
            </div>
          </div>
          <hr className="separator" />
        </div>
      ))}
    </div>
  );
}

export default Post;
