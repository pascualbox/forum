/** @format */

import React from "react";

function Post(props) {
  return (
    <div>
      {props.array.map((element) => (
        <div
          id={props.id}
          class="collapse "
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
