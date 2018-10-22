const React = require('react')
const request = require('axios')

class MessageList extends React.Component {
    constructor(props) {
        super(props)
        this.deleteMessage = this.deleteMessage.bind(this)    
    }
    deleteMessage() {                         
      this.props.initMessageCb();    
    }    

    render() {
      var messages = this.props.messages;
      var tableheaderStyle = {
        "border": "1px solid black", 
        "backgroundColor":"#F1EBF4"
    };
    var tablebodyStyle = {
        "border": "1px solid black", 
        "backgroundColor":"#EEF3DF"
    };
      if (!messages || !messages.length>0) return (
        <table className="table ">          
            <thead style={tableheaderStyle}>
            <style>{"{border:1px solid black;}"}</style>
            <tr>
                <th className="span2">Name</th>
                <th className="span10">Message</th>
            </tr>
            </thead>
        </table>
        //  <p>No messages yet</p>
      )
      return (       
        <div> 
            <table className="table ">          
                <thead style={tableheaderStyle}>
                    <style>{"{border:1px solid black;}"}</style>
                    <tr>
                    <th className="span2">Name</th>
                    <th className="span10">Message</th>
                    </tr>
                </thead>
                <tbody style={tablebodyStyle}>
                    {messages.map(function(message){
                    return (
                        <tr key={message._id}>
                        <td className="span2">{message.name}</td>
                        <td className="span10">{message.message}</td>
                        </tr>
                    )
                    })}                    
                </tbody>          
            </table>
            <a id="delAll" className="btn btn-danger"
                        onClick={this.deleteMessage}>Delete All</a>
        </div>
      )
    }
}
  
class NewMessage extends React.Component {
    constructor(props) {
      super(props)
      this.addMessage = this.addMessage.bind(this)
      this.keyup = this.keyup.bind(this)
    }
    addMessage() {
      let name = this.refs.name.value.trim()
      let message = this.refs.message.value.trim()
      if (!name || !message) {
        return console.error('Name and message cannot be empty')
      }
      this.props.addMessageCb({
        name: name,
        message: message
      })
      this.refs.name.value = ''
      this.refs.message.value = ''
    }
    keyup(e) {
      if (e.keyCode == 13) return this.addMessage()
    }
    render() {
      return (
        <div className="row-fluid" id="new-message">
          <div className="span12">
            <form className="well form-inline" onKeyUp={this.keyup} onSubmit={this.addMessage}>
              <input
                type="text" name="username"
                className="input-small" placeholder="Name" ref="name"/>
              <input
                type="text" name="message" className="input-small"
                placeholder="Leave Message" ref="message" />
              <a id="send" className="btn btn-primary"
                onClick={this.addMessage}>POST</a>
            </form>
          </div>
        </div>
      )
    }
}
  
class MessageBoard extends React.Component {
    constructor(ops) {
      super(ops)
      this.addMessage = this.addMessage.bind(this)
      this.initMessage = this.initMessage.bind(this)
      this.state = {messages: this.props.route.messages }
      //if (this.props.messages)
        //this.state = {messages: this.props.messages}
    }
    componentDidMount() {
      request.get("get-messages")
        .then(response => response.data)
        .then(messages => {
            console.log(messages)
            //if(!messages || !messages.length){
            //  console.log(messages)
            //  return;
            //}        
            this.setState({messages: messages});
        })
    }

    initMessage(){
      //var messages = {}
      //messages = this.state.messages;
      request.post("del-messages")
      .then(result => result.data)
      .then((data) =>{
        //messages.unshift(data);  
        console.log("init message:");                
        //this.setState({messages:this.props.route.messages});
        request.get("get-messages")
        .then(response => response.data)
        .then(messages => {
            console.log(messages)
            //if(!messages || !messages.length){
            //  console.log(messages)
            //  return;
            //}        
            console.log("get message:");
            this.setState({messages: messages});
        })

      });
      
      
    }

    addMessage(message) {
      var messages = {}
      messages = this.state.messages;
      request.post("post-messages", message)
        .then(result => result.data)
        .then((data) =>{
          if(!data){
            return console.error('Failed to save')
          }          
          console.log('message lenth='+this.state.messages.length);            
          messages.unshift(data);
          this.setState({messages: messages});
        })
    }

    render() {
      return (
        <div>
          <h3>게시판</h3>
          <NewMessage messages={this.state.messages} addMessageCb={this.addMessage} />
          <MessageList messages={this.state.messages} initMessageCb={this.initMessage} />
          
        </div>        
      )
    }
}

module.exports = MessageBoard
