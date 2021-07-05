//Imports
import React from "react";
import SavedPage from "./pages/savedPage";
import SignIn from "./pages/signinPage";
import Footer from "./components/footer/index";
import SignUp from "./pages/signUp";
import "./styles/styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import axios from "axios";

//App component
class App extends React.Component {
  //Constructor for states 
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      userName: null,
      id: "",
      user: {},
      firstName: "",
      lastName: ""
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  //when component mounts get user 
  componentDidMount() {
    this.getUser()
  }

  //Update the user 
  updateUser(userObject) {
    this.setState({ user: userObject })
    console.log(userObject)
  }

  //get the user form database
  getUser() {
    axios.get('/api/users/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          userName: response.data.user.userName,
          id: response.data.user._id,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName
        })
        console.log("app.js id")
        console.log(this.state.id)
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          userName: null
        })
      }
    })
  }

  //Render the website with several different routes 
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <SignIn updateUser={this.updateUser} />} />
            <Route exact path="/saved" render={() => <SavedPage loggedIn={this.state.loggedIn} userId={this.state.id} updateUser={this.updateUser} user={this.state.user} userName={this.state.userName} firstName={this.state.firstName} lastName={this.state.lastName} />} />
            <Route exact path="/home" render={() => <Home loggedIn={this.state.loggedIn} userId={this.state.id} updateUser={this.updateUser} getUser={this.getUser} />} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="*"render={() => <SignIn updateUser={this.updateUser}/>}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
