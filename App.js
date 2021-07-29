import React from 'react';
import './App.css';
import Message from './components/Message/Message';
import MessageField from "./components/MessageField/MessageField";
import MessageForm from "./components/MessageForm/MessageForm";

const chatTitle = 'Чат';

export class App extends React.Component {

  constructor(props) {

    super(props);

    this.botMessageList = ['Да', 'Нет', 'Как делишки?', 'Конечно', 'Я так не думаю', 'Врядли']

      this.botAnswer = this.botAnswer.bind(this);
      this.updateMessageList = this.updateMessageList.bind(this);
      this.clearMessageList = this.clearMessageList.bind(this);
      this.updateData = this.updateData.bind(this);
      this.timerHandle = this.timerHandle.bind(this);

    this.state = {
      messageList: [],
      author: 'я'
    };

  }

  updateMessageList = () => {
      if(this.state.value !== ''){
        this.setState({
          messageList: [...this.state.messageList, { author: this.state.author, text: this.state.value}],
        });
        this.setState({value:''})
          this.timerHandle();
      }
  };

  clearMessageList = () => {
      this.setState({
          messageList: []
      })
  }

    updateData = (value) => {
        if(value !== ''){
            this.setState({
                messageList: [...this.state.messageList, { author: this.state.author, text: value}],
            });
            this.timerHandle();
        }
    };

    timerHandle = () => {
        setTimeout(this.botAnswer, 1500);
    }


  botAnswer = () => {
    let botMessage = this.botMessageList[Math.floor(Math.random() * this.botMessageList.length)];
    this.setState({
      messageList: [...this.state.messageList, { author: 'бот', text: botMessage }],
    });
  }

    componentWillUnmount = () => {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    };

    render() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="padding">
                    <div className="box box-warning direct-chat direct-chat-warning">
                        <div className="box-header with-border">
                            <h3 className="box-title"><Message text={chatTitle}/></h3>
                            <div className="box-tools pull-right">
                                <span data-toggle="tooltip" title="" className="badge bg-yellow"
                                      data-original-title="3 New Messages">{this.state.messageList.length}</span>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="direct-chat-messages">
                                <div className="direct-chat-msg">
                                    <div className="direct-chat-info clearfix">
                                    </div>
                                    {this.state.messageList.map((message) => {
                                        return <MessageField author={message.author} text={message.text}/>
                                    })}
                                </div>
                            </div>
                            <MessageForm updateData={this.updateData} clearMessageList={this.clearMessageList}/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
  );
}
}

export default App;
