import { useTheme } from '../context/ThemeContext';

export const Card = ({ title, content }) => {
  const { colors } = useTheme();
  
  return (
    <div style={{
      backgroundColor: colors.secondary,
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      color: colors.text
    }}>
      <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
      <p>{content}</p>
    </div>
  );
};