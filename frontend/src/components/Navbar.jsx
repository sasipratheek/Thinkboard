import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4 flex items-center justify-between">
        
        <div className="text-3xl font-bold text-primary font-mono tracking-wide">
          Thinkboard
        </div>

        <div className="flex items-center gap-4">
          <Link to="/create" className="btn btn-primary flex items-center gap-2">
            <PlusIcon size={16} />
            <span>New Note</span>
          </Link>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
