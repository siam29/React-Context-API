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
          title="W3 Intern Software Engineer"
          content="Al Mahmud Siam"
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