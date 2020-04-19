import React, { useState } from 'react';
import './App.css';

function AddContents(props){
  const [contents,setContents] = useState({
    num: '',
    title: '',
    desc: ''
  });

  function handleChange(e){
    setContents({
      ...contents,
      [e.target.name]:e.target.value,
      date:new Date()
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.saveContents(contents); //props로 전달된 함수 실행
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="title" name="title" onChange={handleChange}></input>
        <input placeholder="desc" name="desc" onChange={handleChange}></input>
        <input type="submit" value="ADD"></input>
      </form>
    </div>
  );
}

function ShowContents(props){
  function handleDelete(){
    console.log('delete contents:' + props.row.num);
    props.handleDelete(props.row.num);
  }

  return(
    <tbody>
      <tr>
        <td>{props.row.num}</td>
        <td>{props.row.title}</td>
        <td>{props.row.writer}</td>
        <td>{props.row.date.toLocaleDateString('kr-KR')}</td>
        <td><button className='delBtn' onClick={handleDelete}>X</button></td>
      </tr>
    </tbody>
  )
}


function Template(){
  var [Data,setData] = useState({
    total:2, 
    boards:
    [
      {
        num:1,
        title:'Hello',
        desc:'HI',
        writer:'Jin',
        date:new Date()
      },
      {
        num:2,
        title:'Good bye',
        desc:'GG',
        writer:'Roh',
        date:new Date()
      }
    ]
  });

  function saveContents(data){
    setData({total:++Data.total,
             boards:Data.boards.concat({...data,num:Data.total})
            });
  }

  function delContents(delNum){
    setData({total:--Data.total,
      boards: Data.boards.filter(function(row){
        return row.num !== delNum //화살표 함수 사용안함 중괄호 안에서는 return 해야함
      })
    })
  }

  function arrangeContents(){
    
  }
  console.log('new data: ' + JSON.stringify(Data));
  arrangeContents();
  return(
    <body>
      <section>
        <header>React Board</header>
        <nav>menu</nav>
        <article>
          <table className='table'>
            <thead>
              <tr>
                <th className='Num'>번호</th>
                <th className='Title'>제목</th>
                <th className='Writer'>작성자</th>
                <th className='Date'>날짜</th>
                <th className='Del'>삭제</th>
              </tr>
            </thead>
            {
              Data.boards.map( row =>
               <ShowContents row = {row} handleDelete={delContents}></ShowContents> 
              )       
            }   
            
          </table>
        </article>
        <AddContents saveContents={saveContents}></AddContents>
      </section>
    </body>
  );
}

function App() {
  return (
    <div>
      <Template></Template>
    </div>
  );
}

export default App;