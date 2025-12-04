import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Undo2 } from 'lucide-react';
import { useLayout } from './LayoutProvider';
import { THEMES } from '../constants';

const BackButton: React.FC = () => {
  const { theme, translate } = useLayout();
  const themeColors = THEMES[theme];
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`fixed bottom-6 right-6 z-[60] p-4 rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-xl active:scale-95 flex items-center justify-center ${themeColors.primary} text-white`}
      aria-label={translate('back')}
      title={translate('back')}
    >
      <Undo2 size={24} />
    </button>
  );
};

export default BackButton;