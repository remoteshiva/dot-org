import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function App() {
  return (
    //     <div>
    //   <div class="bg-gray-800 pb-32">
    //     <nav class="bg-gray-800">
    //       <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    //         <div class="border-b border-gray-700">
    //           <div class="flex items-center justify-between h-16 px-4 sm:px-0">
    //             <div class="flex items-center">
    //               <div class="flex-shrink-0">
    //                 <img class="h-8 w-8" src="/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo" />
    //               </div>
    //               <div class="hidden md:block">
    //                 <div class="ml-10 flex items-baseline">
    //                   <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
    //                   <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
    //                   <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
    //                   <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
    //                   <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div class="hidden md:block">
    //               <div class="ml-4 flex items-center md:ml-6">
    //                 <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
    //                   <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    //                   </svg>
    //                 </button>

    //                 <!-- Profile dropdown -->
    //                 <div class="ml-3 relative">
    //                   <div>
    //                     <button class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
    //                       <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    //                     </button>
    //                   </div>
    //                   <!--
    //                     Profile dropdown panel, show/hide based on dropdown state.

    //                     Entering: "transition ease-out duration-100"
    //                       From: "transform opacity-0 scale-95"
    //                       To: "transform opacity-100 scale-100"
    //                     Leaving: "transition ease-in duration-75"
    //                       From: "transform opacity-100 scale-100"
    //                       To: "transform opacity-0 scale-95"
    //                   -->
    //                   <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
    //                     <div class="py-1 rounded-md bg-white shadow-xs">
    //                       <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
    //                       <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
    //                       <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div class="-mr-2 flex md:hidden">
    //               <!-- Mobile menu button -->
    //               <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
    //                 <!-- Menu open: "hidden", Menu closed: "block" -->
    //                 <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    //                 </svg>
    //                 <!-- Menu open: "block", Menu closed: "hidden" -->
    //                 <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    //                 </svg>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <!--
    //         Mobile menu, toggle classes based on menu state.

    //         Open: "block", closed: "hidden"
    //       -->
    //       <div class="hidden border-b border-gray-700 md:hidden">
    //         <div class="px-2 py-3 sm:px-3">
    //           <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
    //           <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
    //           <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
    //           <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
    //           <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
    //         </div>
    //         <div class="pt-4 pb-3 border-t border-gray-700">
    //           <div class="flex items-center px-5">
    //             <div class="flex-shrink-0">
    //               <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    //             </div>
    //             <div class="ml-3">
    //               <div class="text-base font-medium leading-none text-white">Tom Cook</div>
    //               <div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
    //             </div>
    //           </div>
    //           <div class="mt-3 px-2" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
    //             <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" role="menuitem">Your Profile</a>
    //             <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" role="menuitem">Settings</a>
    //             <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" role="menuitem">Sign out</a>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //     <header class="py-10">
    //       <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <h1 class="text-3xl leading-9 font-bold text-white">
    //           Dashboard
    //         </h1>
    //       </div>
    //     </header>
    //   </div>

    //   <main class="-mt-32">
    //     <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
    //       <!-- Replace with your content -->
    //       <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
    //         <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
    //       </div>
    //       <!-- /End replace -->
    //     </div>
    //   </main>
    // </div>

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <SimpleToggle />
      <p>hello</p>
    </div>
  );
}
function SimpleToggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <span
      role="checkbox"
      aria-checked={isOn}
      tabIndex={0}
      onClick={() => setIsOn(!isOn)}
      onKeyDown={() => setIsOn(!isOn)}
      className={`${
        isOn ? 'bg-indigo-600' : 'bg-gray-200'
      } relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
    >
      <span
        aria-hidden="true"
        className={`${
          isOn ? 'translate-x-5' : 'translate-x-0'
        } inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
      />
    </span>
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
