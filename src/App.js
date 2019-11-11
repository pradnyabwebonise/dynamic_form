import React, { Component } from 'react';
import InputTextField from './components/InputTextField';
import TextAreaField from './components/TextAreaField'
import DropDownSelect from './components/DropDownSelect'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields : [
        {
          placeholder: "purpose of loan",
          name: "name",
          input_type: "dropdown",
          required: "true",
          values: [
            "home_loan",
            "business_loan",
            "working capital",
            "personal loan",
            "educational loan",
            "loan again profit"
          ]
        },
        {
          placeholder: "name",
          name: "remaining_values",
          input_type: "big_text",
          required: "true",
          
        },
        {
          placeholder: "email",
          name: "email",
          input_type: "text",
          required: "true",
          
        },
        {
          placeholder: "preferred time to call you",
          name: "contact_time",
          input_type: "text",
          required: "true",
          
        }
      ]
    }

  }
  
  submitForm = (event) => {
    const {fields,...inputFields} = this.state;
    console.log(inputFields);
    event.preventDefault();
  }
  _handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]:event.currentTarget.value
    })
  }
  render() {
    const {fields} = this.state
    console.log("hi")
    return (
      
      <form onSubmit={this.submitForm}>
        {fields.map(form => {
          if(form.input_type==='dropdown'){
            return(
              <DropDownSelect
               name={form.name}
               placeholder={form.placeholder}
               required={form.required}
               val={form.values}
               key={form.placeholder}
               _handleChange={this._handleChange}
              />

            );
          }
          if(form.input_type==='big_text'){
            return(
              <TextAreaField
               name={form.name}
               placeholder={form.placeholder}
               required={form.required}
               key={form.placeholder}
               _handleChange={this._handleChange}
              />

            );
          }
            if(form.input_type==='text'){
              return(
                <InputTextField
                 name={form.name}
                 placeholder={form.placeholder}
                 required={form.required}
                 key={form.placeholder}
                 _handleChange={this._handleChange}
                />
  
              );
          }
        })}
        <input type="submit"/>
        </form>
      
    );
  }
}

export default App;