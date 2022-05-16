import { wrapper } from '../redux/store'
import '../components/Home/style.scss';

function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(App)