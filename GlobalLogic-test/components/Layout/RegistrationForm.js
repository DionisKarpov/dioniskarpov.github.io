import React, { Component } from 'react';



class RegistrationForm extends Component {
	constructor(props) {
  super(props);
  this.state = {
    email: ''
  };
}

handleSubmit() {
  console.log('form is submitted');
}

handleEmailChange() {
  console.log('handleEmailChange', this);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

		<input type="text" name="text"  placeholder="Name" />

			<input type="email" name="email" placeholder="Email" value={this.state.email}
    			onChange={this.handleEmailChange} />

			<input id="message" type="text"  placeholder="Sand message" />

				<button>Sand</button>
			</form>
    );
  }
}




export default RegistrationForm;