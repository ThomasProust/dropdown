import { Container } from 'semantic-ui-react';
import Dropdown from './components/dropdown';
import useCountries from './hooks/useCountries';
import './App.css';

const App = () => {
    const { countries } = useCountries();

    return (
        <Container>
            <Dropdown data={countries} />
        </Container>
    );
};

export default App;
