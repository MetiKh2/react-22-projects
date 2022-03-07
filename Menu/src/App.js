import React, {useState} from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuList from "./MenuList";
import data from './data'
import Categories from "./Categories";
const App = () => {
    const [menu,setMenu]=useState(data)
    const allCategories=data.map(item=>item.category)
    const filterMenu = (filter) => {
      // one way
        // switch (filter) {
      //     case 'All': setMenu(data); return
      //     case 'breakfast':setMenu(data.filter(item=>item.category=='breakfast')); return
      //     case 'lunch':setMenu(data.filter(item=>item.category=='lunch')); return
      //     case 'shakes':setMenu(data.filter(item=>item.category=='shakes')); return
      //
      // }
        // two way
            if(filter=='All'){
                setMenu(data)
                return
            }
        setMenu(data.filter(item=>item.category==filter));
    }
    return (
        <main>
             <section className={'container'}>
                    <section className={'d-flex flex-column align-items-center mt-5'}>
                        <h1 className={'fw-bold'}>Our Menu</h1>
                        <div className={'d-flex flex-wrap mt-5'}>
                          <Categories allCategories={[...new Set(allCategories)]} filterMenu={filterMenu}/>
                        </div>
                        <MenuList menu={menu}/>
                    </section>
             </section>
        </main>
    );
};

export default App;