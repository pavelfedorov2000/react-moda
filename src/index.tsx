import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);