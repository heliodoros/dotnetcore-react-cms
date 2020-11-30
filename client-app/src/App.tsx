import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, List, ListItem } from 'semantic-ui-react'

class App extends Component {

  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
    
  }

    render(){
    return(
    <div>
      <Header as='h2' icon>
        <Icon name='settings' />
        Account Settings
        <Header.Subheader>
          Manage your account settings and set e-mail preferences.
        </Header.Subheader>
      </Header>


      <List>
        {this.state.values.map((value: any) => (
          <ListItem key={value.id}>{value.name}</ListItem>
        ))}
      </List>

  </div>
);
}
}


export default App;
