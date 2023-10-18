import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import Calc from './components/Calc';

function App() {
    return (
        <body className='App'>
            <div>
                <Header />
                <Result />
                <Calc />
            </div>
        </body>
    )
}

export default App;