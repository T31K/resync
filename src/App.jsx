import Main from './components//Main';
import Sidenav from './components/layouts/Sidenav';
import Toolnav from './components/layouts/Toolnav';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col h-screen">
      <div className="flex-1 flex flex-row overflow-y-hidden">
        <Main />
        <Sidenav />
        <Toolnav />
      </div>
    </div>
  );
}
