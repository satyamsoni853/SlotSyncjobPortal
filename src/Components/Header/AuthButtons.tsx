
import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons: React.FC = () => {
  return (
    <div className="items-center space-x-4">
      <Link to="/login">
        <button className="px-4 py-2 rounded-full border border-faded-jade-200 dark:border-gray-700 bg-faded-jade-100 dark:bg-mine-shaft-800 text-faded-jade-700 dark:text-white transition-colors duration-200 hover:shadow-md">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="px-4 py-2 rounded-full bg-faded-jade-500 text-white transition-colors duration-200 hover:bg-faded-jade-600">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;
