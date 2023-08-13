import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HairQuestionaire from "./components/HairQuestionaire";
import StartQuizPage from './components/StartQuizz'

  import ReactDOM from 'react-dom'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

  library.add(fab, faAngleRight, faAngleLeft)

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Router>
		      <div>
          <Switch>
            <Route exact path="/" component={StartQuizPage} />
			      <Route exact path="/hair-quiz" component={HairQuestionaire} />
          </Switch>
		      </div>
	      </Router>
      </div>
    );
  }
}

export default App;
