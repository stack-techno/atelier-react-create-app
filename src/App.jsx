import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import { Blog } from './Blog';

function App() {
  const config={
    app: 'SANGO NA SMS',
    menus:['Accueil','blog']
  }
  const postsList = [
    {id:1, title:'Titre1', description:'test'},
    {id:2, title:'Titre2', description:'test2'},
    {id:3, title:'Titre3', description:'test3'},
    {id:4, title:'Titre4', description:'test4'},
   
]
const test =()=>((
  { id:1}
))
  // const renderBlog =()=>{
  //   return (<div className='row'>
  //      { blogList.map((index, item)=>{
  //       return (<div className='col-md-3' key={index}><Blog/></div>)
  //      })}
  //   </div>)
  // }
  return (
    <div className="App">
      <Navbar config={config}/>
      <div className="container mt-5">
      <Blog postsList={postsList}/>
      </div>
    </div>
  );
}

export default App;
