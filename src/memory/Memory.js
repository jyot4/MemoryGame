import React,{useState,useEffect} from 'react'
import './memory.css'
import img from './img.jpg';
import img1 from './img1.jpg';


function Memory() {
  // const url = "https://pokeapi.co/api/v2/pokemon/ditto"

const [opened ,setOpened] = useState([])
const [match ,setMatch] = useState([])


const data = [
  { id: 1, name: "balbasaur" ,img: img},
  { id: 8, name: "wartotle" ,img: img1},
  { id: 9, name: "blastoise" , img : img},
  { id: 6, name: "charizard"  , img: img1}
]

const pairofdata = [...data , ...data];

function flipchard(index){
setOpened([...opened,index])

}


useEffect(()=>{

if(opened < 2) return;

const first = pairofdata[opened[0]]
const second = pairofdata[opened[1]]

if(second && first.id === second.id){
  setMatch([...match ,first.id])
}

if(opened.length === 2 ){
  setTimeout(()=>setOpened([]), 1000)
}
},[opened])
  return (
    <div className='memory'>
      <div className='memorylogic'>
{
  data.map((item,input)=>{
    

    let flip = false
    if(opened.includes(input)) flip = true
    if(match.includes(item.id)) flip = true;
return(
  <div className={`cards${flip ? "flipped" : ""}`}
  key={input}
  onClick={()=>flipchard(input)}
  >



    <div className='inner'>
      <div className='front'>
        <img src={item.img} alt='img'></img>
      </div>
      <div className='back'></div>
    </div>
  </div>
)
  })
}
      </div>
    </div>
  )
}

export default Memory