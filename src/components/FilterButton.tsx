interface FilterButtonProps {
  label: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ 
  label, 
  count, 
  isActive, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
    >
      {label} {count !== undefined && `(${count})`}
    </button>
  );
};