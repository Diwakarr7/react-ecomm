import { ChartNoAxesCombined, LayoutDashboard, ListOrdered, ShoppingBasket } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Sheet } from '../ui/sheet';


export const adminSideBar = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin/dashboard',
    icon: <LayoutDashboard />,
  },
  {
    id: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: <ShoppingBasket />,
  },
  {
    id: 'orders',
    label: 'Orders',
    path: '/admin/orders',
    icon: <ListOrdered />,
  },
];

function MenuItems() {
  const navigate = useNavigate();
  return (
    <>
      {adminSideBar.map((item) => (
        <h1
          className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-4 pl-4 cursor-pointer rounded-sm  min-w-[240px]  text-center py-2 hover:rounded-lg text-xl font-extralight  hover:underline"
          key={item.id}
          onClick={() => navigate(item.path)}
        >
          <span>{item.icon}</span>
          {item.label}
        </h1>
      ))}
    </>
  );
}

function AdminSidebar({open, setOpen}) {
  const navigate = useNavigate();
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}/>
    <aside className=" w-64 flex-col border-r  bg-background p-6 lg:flex">
      {/* <h1> admin sidebar</h1> */}
      <h1
        onClick={() => navigate('/admin/dashboard')}
        className="uppercase underline decoration-wavy underline-offset-8 cursor-pointer flex text-2xl font-bold items-center gap-2"
        >
        <ChartNoAxesCombined size={30} />
        admin panel
      </h1>
      <div className="flex items-center flex-col space-y-4 mt-12">
       <MenuItems/>
      </div>
    </aside>
        </>
  );
}

export default AdminSidebar;
