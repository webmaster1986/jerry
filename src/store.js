import { createStore,} from 'redux';
import reducer from './redux/reducer/reducer'

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

export default store;
