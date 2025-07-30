import React from 'react';

const CardCustom = ({ title, value, icon: Icon, color, description }) => {
  return (
    <div className={`p-4 rounded-2xl shadow-md bg-white dark:bg-gray-900 hover:scale-[1.02] transition-all border-l-4 ${color || 'border-blue-500'}`}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          {Icon && <Icon className="w-6 h-6" />}
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-300">{title}</h3>
            {value && <p className="text-xl font-bold text-gray-800 dark:text-white">{value}</p>}
          </div>
        </div>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-10">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardCustom;
