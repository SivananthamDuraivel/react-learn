
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Additem from './Additem';
import Search from './Search';
//import Project from './Project';


export default function App() {

  const API_URL="http://localhost:3500/item";

    const [item,setitem]=useState([]);
    const[newItem,newSetItem]=useState('')
    const[search,setSearch]=useState('')

    // useEffect(()=>{
    //   setitem(JSON.parse(localStorage.getItem("todo-list")))
    //   console.log("latest",item)
    // },[])

    // useEffect(()=>{
    //   //async function: to make that this function runs without synced and not made waited for others
    //   const fetchItem = async() =>
    //   {
    //     try{
    //       const response=await fetch(API_URL);
    //       const listItems =await response.json();
    //       console.log(listItems)
    //       setitem(listItems);
    //       console.log(item)

    //     }
    //     catch(err)
    //     {
    //       console.log(err.stack)
    //     }
    //   }
    //   //call it
    //   fetchItem()
    // },[])
    
    function addNewItem(i)
    { 
      //console.log(i)
      const id=item.length?(item[item.length-1].id)+1:1; 
      const newitem={id,checked:false,task:i};
      console.log(newitem)
      const newList=[...item,newitem]
      setitem(newList)
      localStorage.setItem("todo-list",JSON.stringify(newList))
    }

  

    function handlechange(selectedid){
      const newlist=item.map((i)=>(
        selectedid===i.id?{...i,checked:!i.checked}:i
      ))
      setitem(newlist)
      //local-setItem() fn
      localStorage.setItem("todo-list",JSON.stringify(newlist))
    }

    function handledelete(selectedid)
    {
      const newlist=item.filter((i)=>(
        selectedid!==i.id
      ))
      setitem(newlist)
      localStorage.setItem("todo-list",JSON.stringify(newlist))
    }
    function handlesubmit(val)
    {
      val.preventDefault() //to avoid that reloading of the page after submitting the form
      if(!newItem)
        return
      addNewItem(newItem)
      
      newSetItem("")
    }
    // const [color,setColor]=useState('')
    // const [hex,setHex]=useState()
    // const [tog,setTog]=useState(true)



  return (
    // <div>
    //   <Project
    //     color={color}
    //     setColor={setColor}
    //     hex={hex}
    //     setHex={setHex}
    //     tog={tog}
    //     setTog={setTog}
    //   />
    // </div>
    <div className="App">
      <Header title="siva's todo-list"/>
      <Additem
        newItem={newItem}
        newSetItem={newSetItem}
        handlesubmit={handlesubmit}
      />
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Content 
        item={item?item.filter( (item)=>((item.task).toLowerCase()).includes(search.toLowerCase()) ):''} 
        handlechange={handlechange} 
        handledelete={handledelete}
      />
      <Footer len={item.length}/>
    </div>
  );
}


