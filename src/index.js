import ReactDOM from 'react-dom';
import App from './components.js/App';
import reducer, { initialState } from './components.js/Reducer';
import { StateProvider } from './components.js/StateProvider';
import './index.css'

ReactDOM.render(
<StateProvider initialState={initialState} reducer={reducer}>
    <App />
</StateProvider>
, document.querySelector("#root"));