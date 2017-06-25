import React from 'react';

class Notesinput extends React.Component  {
   constructor(props){
     super(props);
     this.state = { notes: ""};
     console.log(props);
     this.changeEventHandler = this.changeEventHandler.bind(this);
   }
   changeEventHandler(e){
     console.log(e.target.value);
     this.props.addNotes(this.props.name, this.props.date, this.props.amount, e.target.value);
   }
   render() {
     return(
       <div>
          <input type="text" style={{width: "255px"}} onChange={this.changeEventHandler}/>
       </div>
     );
   }
}

export default Notesinput;
