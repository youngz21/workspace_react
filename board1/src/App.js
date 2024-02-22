import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [boardList, setBoardList] = useState([
    {
      'boardNo': 1,
      'title': '1번글 제목',
      'content': '1번글 내용',
      'writer': 'SOHN',
      'regDate': '2024-02-01'
    },
    {
      'boardNo': 2,
      'title': '2번글 제목',
      'content': '2번글 내용',
      'writer': 'KIM',
      'regDate': '2024-02-01'
    },
    {
      'boardNo': 3,
      'title': '3번글 제목',
      'content': '3번글 내용',
      'writer': 'LEE',
      'regDate': '2024-02-01'
    },
    {
      'boardNo': 4,
      'title': '4번글 제목',
      'content': '4번글 내용',
      'writer': 'KANG',
      'regDate': '2024-02-01'
    },
    {
      'boardNo': 5,
      'title': '5번글 제목',
      'content': '5번글 내용',
      'writer': 'CHOI',
      'regDate': '2024-02-01'
    }
  ]);

  const [isShow, setIsShow] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const showDetail = (idx) => {
    setSelectedIdx(idx);
    setIsShow(true);
  }

  return (
    <div className="App">
      <div className='black-nav'>게시글</div>
      <p>--------------------</p>
      {boardList.map((board, idx) => (
        <MainList
          key={idx}
          idx={idx}
          board={board}
          showDetail={showDetail}
        />
      ))}
      {isShow && selectedIdx !== null && (
        <Detail
          board={boardList[selectedIdx]}
          setIsShow={setIsShow}
        />
      )}
    </div>
  );
}

function MainList({ board, idx, showDetail }) {
  return (
    <div>
      <div>{board.boardNo}</div>
      <div>
        <span onClick={() => showDetail(idx)}>{board.title}</span>
      </div>
      <div>{board.content}</div>
      <div>{board.regDate}</div>
      <div>{board.writer}</div>
      <p>--------------------------</p>
    </div>
  );
}

function Detail({ board, setIsShow }) {
  return (
    <div>
      <p>------------------------</p>
      <div>{board.boardNo}</div>
      <div>{board.title}</div>
      <div>{board.content}</div>
      <div>{board.regDate}</div>
      <div>{board.writer}</div>
      <button onClick={() => setIsShow(false)}>Close</button>
    </div>
  );
}

export default App;
