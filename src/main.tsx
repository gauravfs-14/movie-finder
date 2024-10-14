import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './components/Navbar';
import { Separator } from './components/ui/separator';
import { SearchContext } from './context/context';

function Root() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StrictMode>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <Navbar />
        <Separator />
        <App />
      </SearchContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
