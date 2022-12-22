import React from 'react'

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">User List - Next</span>
      </div>
    </nav>
  )
}

export default Header