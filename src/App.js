// Import data
import {postings} from './postings'

// Import components
import './App.css';
import Directory from './Components/Directory'
import Gallery from './Components/Gallery'
import Searchbar from './Components/Searchbar'
import Sidebar from './Components/Sidebar'


function App(){
  return (
    <div>
      <h1>huntyzlist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Searchbar/>
        <Directory/>
        <Sidebar/>
        <Gallery postings={postings}/>
      </div>
    </div>
  );
}

export default App;
