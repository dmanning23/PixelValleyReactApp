import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
import './App.css';
import Overworld from './Queries/GetOverworld';
import Location from './Queries/GetLocation';
import Conversation from './Queries/GetConversation';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'https://pixelvalleygraphql-f5b204ed1432.herokuapp.com/graphql',
    //uri: 'http://127.0.0.1:5000/graphql',
    cache: new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors'
    },
})

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={
                <ApolloProvider client={client}>
                    <Overworld scenarioId={'65bbcc69d9e6cf794859d192'}/>
                </ApolloProvider>}
            />
            <Route exact path="/scenario/:id" element={
                <ApolloProvider client={client}>
                    <Overworld />
                </ApolloProvider>}
            />
            <Route path="/location/:id" element={
                <ApolloProvider client={client}>
                    <Location />
                </ApolloProvider>}
            />
            <Route path="/conversation/:id" element={
                <ApolloProvider client={client}>
                    <Conversation isChat={false}/>
                </ApolloProvider>}
            />
            <Route path="/chat/:id" element={
                <ApolloProvider client={client}>
                    <Conversation isChat={true}/>
                </ApolloProvider>}
            />
        </Routes>
    </BrowserRouter>
    );
}

//Elves 65eccd03635456e5173ad235
//NeoTokyo 65ff27fb6e43ac4559f147fc
//Pemberley 66004b13006cd24fff3ea55a
//Fishing Village 6603768518e6fc04d166200e
//Androids 660392f318e6fc04d16621ed
//Atlantis 66044d8e18e6fc04d16623c2

export default App;
