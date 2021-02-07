import { Container } from 'semantic-ui-react';
import Dropdown from './components/dropdown';
import useCountries from './hooks/useCountries';

const App = () => {
    const { countries } = useCountries();

    return (
        <Container>
            <Dropdown data={countries} />
        </Container>
    );
};

export default App;
