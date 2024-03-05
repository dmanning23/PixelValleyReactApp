import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Overworld from './Queries/GetOverworld';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://127.0.0.1:5000/graphql',
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors'
    }
})

function App() {

  return (
    <div>
        <ApolloProvider client={client}>
            <Overworld scenarioId={'6580b18f0b38cba6f29e3f88'}/>
        </ApolloProvider>
    </div>
  );
}

export default App;
