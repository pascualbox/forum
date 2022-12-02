/** @format */

import Post from "../../components/post/Post";
import HeaderThread from "../../components/headerThread/HeaderThread";
import "./Home.scss";
import { Fab } from "@mui/material";

function Home() {
  const text =
    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.";
  const posts1 = [text, text, text, text];
  const posts2 = [text, text, text, text];
  const posts3 = [text, text, text, text];
  const posts4 = [text, text, text, text];

  return (
    <div class="accordion containerMain" id="accordionExample">
      <Fab color="info" aria-label="add" variant="extended" classes="fab">
        Añadir
      </Fab>
      <div class="card">
        <HeaderThread
          title={"Consulting serius things"}
          target={"#collapseOne"}
          controls={"collapseOne"}
        />
        <div className="scroll">
          <Post array={posts1} id="collapseOne" />
        </div>
      </div>
      <div class="card title">
        <HeaderThread
          title={"Car content"}
          target={"#collapseTwo"}
          controls={"collapseTwo"}
        />
        <div className="scroll">
          <Post array={posts2} id="collapseTwo" />
        </div>
      </div>
      <div class="card">
        <HeaderThread
          title={"React discussions"}
          target={"#collapseThree"}
          controls={"collapseThree"}
        />
        <div className="scroll">
          <Post array={posts3} id={"collapseThree"} />
        </div>
      </div>
      <div class="card ">
        <HeaderThread
          title={"Random doubts"}
          target={"#collapseFour"}
          controls={"collapseFour"}
        />
        <div className="scroll">
          <Post array={posts4} id={"collapseFour"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
