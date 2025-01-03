import { useTheme } from '../context/ThemeContext';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



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
           {isDarkTheme ? <FontAwesomeIcon icon={faSun} style={{ marginRight: '8px' }} /> : <FontAwesomeIcon icon={faMoon} style={{ marginRight: '8px' }} />} 
        </Button>
      </div>
    </nav>
  );
};