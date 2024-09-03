import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import ThemeSelector from './components/ThemeSelector';

function App() {
    return (
        <div className='App'>
            <div>
                <Header />
                <Calculator />
            </div>
        </div>
    )
}

export default App;