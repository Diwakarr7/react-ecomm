import React from 'react'
import { Button } from '../ui/button';
import { LogOut, Menu } from 'lucide-react';

function AdminHeader() {
  return (
    <header className="bg-orange-50 py-6 rounded-b-xl flex justify-between ">
      <Button className="lg:hidden sm:block">
        <Menu />
        <span className="sr-only ml-2">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className="inline-flex gap-2 item-center rounded-md">
        <LogOut />
       Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader
