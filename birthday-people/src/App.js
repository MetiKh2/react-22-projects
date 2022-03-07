import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import List from "./List";
import {useState} from "react";
import data from "./data";
function App() {
    const [people,setPeople]=useState(data)
  return (
    <main>
      <section className={'container'}>
          <h3>{people.length} Birthday today</h3>
          <List people={people}></List>
          <button onClick={()=>{setPeople([])}}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
