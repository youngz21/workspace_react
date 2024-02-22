import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  //let title = '첫번째 글';
  let [a,b] = [1,2];
  console.log(a);

  const name = 'Java';

  //state 변수
  let [title, setTitle] = useState(['첫번째 글','울산 맛집','겨울 코트']);
  let [likeCnt,setLikeCnt] = useState([0,0,0]);
  let [isShow, setIsShow] = useState(false);  

  //input 태그에 입력한 값을 저장하고 있는 state 변수

  let [newTitle, setNewTitle] = useState('');

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
            <List setTitle={setTitle} key={i} title={title} likeCnt={likeCnt} idx={i}  setLikeCnt={setLikeCnt} setIsShow={setIsShow}/>  //title[i]
            
          );
        })
      }

      <div>
        <input type='text' onChange={(e) => {
        // input 태그에 입력한 값을 출격
        setNewTitle(e.target.value)

        }} />
        <input type='button' value={'save'} onClick={(e)=>{
          let copyTitle = [...title];
          copyTitle.push(newTitle);
          // copyTitle.unshift(newTitle); 배열 가장 앞에 추가 

          setTitle(copyTitle);
              
        }}/>

      </div>


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
      
      }}>{props.title[props.idx]}</span>
      
      {/* <span onClick={() => {
        let newLikeCnt = [...props.likeCnt];
        newLikeCnt[props.idx]++;
        props.setLikeCnt(newLikeCnt);
      }}>👍</span> {props.likeCnt[props.idx]}  */}

      </h4>
    <p> 2024 Feb,19</p>
    <button type='button' onClick={(e) => {
 
      let copyTitle2 = [...props.title];
      copyTitle2.splice(props.idx, 1); 
      props.setTitle(copyTitle2)
    }} >Delete</button>

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
