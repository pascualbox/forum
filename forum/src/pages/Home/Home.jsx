import React from "react";
import Post from "../../components/post/Post";
import HeaderThread from "../../components/headerThread/HeaderThread";

function Home() {
  const text =
    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.";
  const posts1 = [text, text, text, text];
  const posts2 = [text, text, text, text];
  const posts3 = [text, text, text, text];
  const posts4 = [text, text, text, text];

  const postHandle = (event) => {
    switch (event.id) {
      case 1:
        posts1.concat(posts1, event.post);
        break;
      case 2:
        posts1.concat(posts2, event.post);
        break;
      case 3:
        posts1.concat(posts3, event.post);
        break;
      case 4:
        posts1.concat(posts4, event.post);
        break;

      default:
        break;
    }
  };
  return (
    <div class="accordion" id="accordionExample">
      <div class="card">
        <HeaderThread
          title={"Thread 1"}
          target={"#collapseOne"}
          controls={"collapseOne"}
        />
        <Post array={posts1} id="collapseOne" />
      </div>
      <div class="card">
        <HeaderThread
          title={"Thread 2"}
          target={"#collapseTwo"}
          controls={"collapseTwo"}
        />
        <Post array={posts2} id="collapseTwo" />
      </div>
      <div class="card">
        <HeaderThread
          title={"Thread 3"}
          target={"#collapseThree"}
          controls={"collapseThree"}
        />
        <Post array={posts3} id={"collapseThree"} />
      </div>
      <div class="card">
        <HeaderThread
          title={"Thread 4"}
          target={"#collapseFour"}
          controls={"collapseFour"}
        />
        <Post array={posts4} id={"collapseFour"} />
      </div>
    </div>
  );
}

export default Home;
