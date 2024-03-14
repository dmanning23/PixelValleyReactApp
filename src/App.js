import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Overworld from './Queries/GetOverworld';
import Location from './Queries/GetLocation';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://127.0.0.1:5000/graphql',
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors'
    }
})

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={
                <ApolloProvider client={client}>
                    <Overworld scenarioId={'65eccd03635456e5173ad235'}/>
                </ApolloProvider>}
            />
            <Route path="/location/:id" element={
                <ApolloProvider client={client}>
                    <Location />
                </ApolloProvider>}
            />
        </Routes>
    </BrowserRouter>
    );
}
 //swole ville 65bbcc69d9e6cf794859d192
//pirate village 6580b18f0b38cba6f29e3f88
//ninja village 659b4e1dd199ac6c4ab597c8
//spooksville 65b13e13041e78973118f97f
//Ancient Greek City 65d2692d22dcc866a3c70ab6
//Elves 65eccd03635456e5173ad235

export default App;
