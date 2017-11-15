import React, { Component } from 'react';



class RegistrationForm extends Component {
	constructor(props) {
  super(props);
  this.state = {
    email: ''
  };
  super(props);
  this.state = {
    name: ''
  };
}

handleSubmit() {
  console.log('form is submitted');
}

handleEmailChange() {
  console.log('handleEmailChange', this);
}

handleNameChange() {
  console.log('handleNameChange', this);
}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>

		<input type="text" name="text"  placeholder="Name" value={this.state.name}
          onChange={this.handleNameChange}/>

			<input type="email" name="email" placeholder="Email" value={this.state.email}
    			onChange={this.handleEmailChange} />

			<input id="message" type="text"  placeholder="Sand message" />

				<button>Sand</button>
			</form>
    );
  }
}




export default RegistrationForm;