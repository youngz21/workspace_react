import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //let title = '첫번째 글';
  let [a,b] = [1,2];
  console.log(a);

  const name = 'Java';

  //state 변수
  let [title, setTitle] = useState(['첫번째 글','울산 맛집','겨울 코트']);
  let [likeCnt,setLikeCnt] = useState([0,0,0]);
  let [isShow, setIsShow] = useState(false);  


  return (
    <div className="App">
        <div className='black-nav'>
          <h4>Blog</h4>
        </div>
  
    <button type="button" onClick={() => {
      let title2 = [...title];
      title2[0] = '남자옷 추천';
      setTitle(title2);
    }} >글 변경 </button>

      {
        title.map((e,i)=>{
          return (
            <List key={i} title={e} likeCnt={likeCnt} idx={i}  setLikeCnt={setLikeCnt} setIsShow={setIsShow}/>  //title[i]
            
          );
        })
      }

      {
        isShow ? <Detail /> : ''

      }

    </div>
  );
}

function List(props) {
  return(
    <div className='list'>
      <h4><span onClick={()=>{

       props.setIsShow(true)
      
      }}>{props.title}</span><span onClick={() => {
        let newLikeCnt = [...props.likeCnt];
        newLikeCnt[props.idx]++;
        props.setLikeCnt(newLikeCnt);
      }}>👍</span> {props.likeCnt[props.idx]} 
      </h4>
    <p> 2024 Feb,19</p>
  </div>
  );
}

function Detail() {
  return (
    <div className='detail'>
    <h4>Title</h4>
    <p>Date</p>
    <p>Contents</p>
  </div>
  );
}


export default App;
