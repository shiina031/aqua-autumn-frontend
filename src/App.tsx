import { HashRouter } from 'react-router-dom';
import { UserProvider } from './providers/UserProvider';
// @ts-ignore
import { Router } from './router/Router';

const App = () => {
  return (
    <HashRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </HashRouter>
  );
};

export default App;
