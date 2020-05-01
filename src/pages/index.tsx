import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Navigation from '../components/molecules/Navigation';
import { theme } from '../assets/theme';

export default function App() {
  return <Navigation theme={theme} />;
}

interface Card {
  content: JSX.Element;
}

function CenteredCard({ content }: Card) {
  return (
    <main className="-mt-32">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 rounded-lg shadow px-5 py-6 sm:px-6">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <div className="text-center content-center justify-center">
              {content}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  const match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  const { topicId } = useParams();
  return <h3>{`Requested topicId: ${topicId}`}</h3>;
}
