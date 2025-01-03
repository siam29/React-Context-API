import { useTheme } from '../context/ThemeContext';

export const Button = ({ onClick, children }) => {
  const { colors } = useTheme();
  
  return (
    <button 
      onClick={onClick}
      style={{ 
        backgroundColor: colors.primary,
        color: colors.text,
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
};