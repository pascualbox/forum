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
<<<<<<< HEAD
          <div class="card-body">
            <div className="content">
              <PostHeader title="Pepe" category="Masajista de Tello" />
              <hr className="hr" />
              <PostBody content={element} />
            </div>
          </div>
          <hr className="separator" />
=======
          <div class="card-body">{element}</div>
          <hr />
>>>>>>> parent of e2f7a06 (cositas)
        </div>
      ))}
    </div>
  );
}

export default Post;
