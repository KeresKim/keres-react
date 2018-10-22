const React = require('react')
//const ReactDOM = require ('react-dom')

class MusicPlay extends React.Component {
    constructor(props) {
        //console.log("here clock -- constructor");  
      super(props)
      //this.launchClock()
      this.state = {musicState : "stop"}
      this.MusicCtrl = this.MusicCtrl.bind(this);
    }
    MusicCtrl(){
        if(this.state.musicState == "stop"){
            this.setState({musicState:"play"});
            document.getElementById('music-flute').play()
        }else{
            this.setState({musicState:"stop"});
            document.getElementById('music-flute').pause()
        }
        return  
    }

    
    render() {
        console.log('Rendering...music play ')
//src="./data/flute_c_long_01.wav"
      return <div>
        <h3> Music : Final Fantasy Main Theme </h3>
        <p>Music Play by Button</p>
        <button className="btn btn-primary" onClick={()=>{this.MusicCtrl()}}>{this.state.musicState}</button>
        <audio id="music-flute" src="./data/Final_Fantasy_Main_Theme.mp3" type="audio/mpeg" preload="auto"></audio>        
        <br/><br/><br/><br/>
        <p>Music Play by controls</p>
        <audio controls>
            <source src="./data/Final_Fantasy_Main_Theme.mp3" type="audio/mpeg" />            
        </audio>
      </div> 
      
    }
  }

module.exports = MusicPlay