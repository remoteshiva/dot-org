import React from 'react';
import { render } from 'react-dom';

import './assets/main.css';
import Index from './pages';

// import i18n for bundling
import './i18n';

render(<Index />, document.getElementById('root'));
