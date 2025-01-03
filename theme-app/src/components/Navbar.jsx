import { useTheme } from '../context/ThemeContext';
import { Button } from './Button';

export const Navbar = () => {
  const { colors, toggleTheme, isDarkTheme } = useTheme();
  
  return (
    <nav style={{ 
      backgroundColor: colors.navbar,
      padding: '1rem',
      marginBottom: '2rem'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        color: colors.text
      }}>
        <h1>Theme Demo</h1>
        <Button onClick={toggleTheme}>
          Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
        </Button>
      </div>
    </nav>
  );
};