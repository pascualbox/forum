import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home';

function App() {
  let content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis aliquet erat vel egestas. Nunc dapibus ut nisl eu tristique. Ut sollicitudin sed ipsum sed congue. Maecenas maximus blandit eros, eget tempus lorem bibendum imperdiet. Proin a hendrerit lorem, a dignissim dui. Vivamus pretium eu neque sed condimentum. Morbi mattis, mauris mollis fermentum faucibus, neque urna iaculis magna, eu congue velit nisl id diam. Curabitur imperdiet enim ac dui varius, et aliquet tortor consectetur. Aliquam sagittis justo ac varius pulvinar. Donec sagittis enim ac nisl convallis iaculis nec non est."

  +"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin pretium nisi ipsum, eget pretium ex gravida sed. Duis ultrices, arcu ut mattis tristique, nulla nibh vestibulum ante, non dignissim nulla velit in orci. Donec viverra sed sapien vitae molestie. Sed consectetur risus vitae nisi rutrum porttitor. Pellentesque luctus nibh velit, id lobortis felis sagittis nec. Fusce scelerisque tempor libero sed commodo. Aliquam tempor mauris id sapien accumsan, nec accumsan sem imperdiet. Phasellus quis pulvinar ante. Sed at risus ultricies, mollis felis at, consequat ante. Integer eu lacinia neque. In pharetra dignissim imperdiet."
  
  +"Vestibulum felis lectus, gravida ut luctus ac, molestie non nulla. Nam vehicula accumsan rhoncus. Etiam feugiat in elit at fringilla. Etiam ut tellus ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam mattis et velit a iaculis. Donec euismod vel felis id commodo. Nulla blandit sollicitudin erat quis congue. Vestibulum convallis blandit nibh, eu imperdiet nisl maximus ac."
  
  +"Proin aliquet id leo non lobortis. Fusce eu ante aliquet augue ultrices aliquet ac nec urna. Aenean at neque ut dolor malesuada dignissim. Pellentesque interdum ut orci quis viverra. Phasellus maximus molestie ipsum a bibendum. Aenean molestie mattis orci, lacinia euismod lectus molestie sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis lacus varius fermentum accumsan. Curabitur blandit varius nunc, eget tempus augue commodo eu. Donec eu erat ac orci finibus dapibus. Praesent purus ante, tincidunt id rhoncus ut, cursus in felis. Quisque vulputate metus sit amet hendrerit dignissim. Mauris rutrum felis non pretium rutrum. Proin at risus maximus turpis egestas porttitor. Sed ut rutrum metus."
  
  +"Suspendisse posuere turpis vel orci suscipit cursus. Vestibulum lacinia purus id risus rhoncus pellentesque. Mauris faucibus ac libero eu fermentum. Morbi id mollis neque. Aenean tristique tortor a diam vehicula imperdiet. Etiam vitae laoreet velit. Etiam convallis, risus a varius dapibus, nunc ante finibus nisi, in iaculis lorem felis eu lectus. Donec faucibus, diam sed ornare euismod, odio metus finibus massa, sit amet fringilla eros tortor hendrerit mi. Aenean id risus quis mauris tristique scelerisque. Curabitur gravida nisl risus, at egestas ante varius et. Donec in suscipit erat. Nunc gravida, justo at efficitur hendrerit, erat diam placerat nulla, et malesuada odio elit at metus. Maecenas semper rutrum finibus. Aenean lacus nunc, rutrum eget dictum ut, ullamcorper eu elit. Etiam ornare leo a arcu rutrum scelerisque."
  const [checked, setchecked] = useState(false);
  function handleChange(checked) {
    setchecked(!checked);
    this.setState({ checked });
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Button message="Enviar respuesta" />
          <Switch onChange={handleChange} checked={checked} />
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home/>
    </div>
  );
}

export default App;
