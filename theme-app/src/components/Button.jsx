import { useTheme } from '../context/ThemeContext';

export const Button = ({ onClick, children }) => {
  const { colors } = useTheme();
  
  return (
    <button 
      onClick={onClick}
      style={{ 
        padding: '16px 16px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer'
        
      }}
    >
      {children}
    </button>
  );
};