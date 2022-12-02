import React from "react";

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
          <div class="card-body">{element}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Post;
