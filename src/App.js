import React from "react";
import "./App.scss";
import { AuthProvider } from "./context/auth";
import ApolloProvider from "./ApolloProvider";
import Routes from "./Routes";
function App() {
  return (
      <ApolloProvider>
      <AuthProvider>
       <Routes/>
      </AuthProvider>
      </ApolloProvider>
  );
}

export default App;
