import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';

import { firestore, convertProjectSnapshotToMap } from './Firebase/firebase.utils';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import NavBar from './Components/navbar/navbar.component';
import Footer from './Components/Footer/footer.component';
import HomePage from './pages/homepage/Homepage.page';
import AllProjects from './pages/project/projectpage.component';
import Contact from './pages/Contact/contact.component';
import WriteRecommendation from './pages/recommendation/writerecommendation';
import ScrollToTop from './Components/scrollToTop/ScrollToTop';
import AddProject from './pages/Addproject/addProject.component';
import ProjectPage from './pages/project/singleProjectPage';
import NotFound from './pages/NotFound/notFound.jsx';

class App extends React.Component {
  projects = null;
  state = {
    loading: true
  }

  componentDidMount() {
    const projectRef = firestore.collection('projects');
    projectRef.onSnapshot(async snapshot => {
      const proref = convertProjectSnapshotToMap(snapshot);
      this.projects = proref;
      this.setState({ loading: false });
      return this.projects;
    })
  }

  componentWillUnmount() {
    this.projects = null;
  }

  render() {
    const { loading } = this.state;
    return (
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/projects' render={(props) => <AllProjects projects={this.projects} loading={loading} />} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/write-a-recommendation' component={WriteRecommendation} />
          <Route exact path='/addProject' component={AddProject} />
          <Route exact path="/project/:id" render={(props) => <ProjectPage projects={this.projects} loading={loading} {...props} />} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
