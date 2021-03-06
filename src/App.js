import React from 'react';
import './App.css';
import {connect} from 'react-redux-dom';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth= null;
  
  componentDidMount(){
    const {setCurrentUser} =this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const  userRef= await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });
        });
        
      }
      this.setState({currentUser:userAuth});
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render () {
    return (
      <div> 
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      </div>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });
  
  export default connect(null, )(App);