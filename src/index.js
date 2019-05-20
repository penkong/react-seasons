import React,{useState , useEffect} from 'react'
import ReactDOM from 'react-dom'
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat ,setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(()=>{
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  },[]) //empty arr cause load up one time
  let content;
  if(errorMessage) {
    content = <div>  Error : {this.state.errMessage} </div>
  } else if (lat) {
    content = <SeasonsDisplay lat={lat}/>
  } else {
    content = <Spinner message="Please accept location request"/>
  }
  return (<div className="border red">{content}</div>);
}

ReactDOM.render(<App/>,document.querySelector('#root'));

  // class App extends Component {
  //   state = {lat : null , errMessage : ''};
  
  //   componentDidMount() {
  //     window.navigator.geolocation.getCurrentPosition(
  //       position => this.setState({lat :position.coords.latitude}),
  //       err => this.setState({ errMessage : err.message})
  //     );
  //   }
    
  //   renderContent(){
  //     if (this.state.errMessage && !this.state.lat) {
  //       return <div>  Error : {this.state.errMessage} </div>
  //     }
    
  //     if(!this.state.errMessage && this.state.lat){
  //       return (<div><SeasonsDisplay lat={this.state.lat}/></div>);
  //     }
    
  //     return <div> <Spinner message="Please accept location request"/> </div>
  //   }
  
  //   render() {
  //     return (
  //       <div className="border red">
  //         {this.renderContent()}
  //       </div>
  //     );
  
  //   };
  // }
