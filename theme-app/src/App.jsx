import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';

const MainContent = () => {
  const { colors } = useTheme();
  
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: colors.background,
      transition: 'background-color 0.3s ease'
    }}>
      <Navbar />
      <div style={{ padding: '0 2rem' }}>
        <Card 
          title="Welcome to Theme Demo"
          content="This is a demonstration of theme switching using React Context API. Try switching between light and dark themes!"
        />
        <Card 
          title="How it works"
          content="We use React's Context API to manage theme state globally. The theme provider wraps the app and makes theme values available to all components."
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;