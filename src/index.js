import 'lazysizes';
import 'src/_api_';
import 'src/utils/i18n';
import 'simplebar/src/simplebar.css';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// ----------------------------------------------------------------------

ReactDOM.render(<App />, document.getElementById('root'));
