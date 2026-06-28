// app-sidebar.jsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 font-bold">Strike Desk</SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-4">
          <Link to="/">Dashboard</Link>
        </SidebarGroup>
        <SidebarGroup className="p-4">
          <Link to="/strategies">Strategies</Link>
          </SidebarGroup>
        <SidebarGroup className="p-4">
          <Link to="/history">History </Link>
          
          </SidebarGroup>
        <SidebarGroup className="p-4">Settings</SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-sm">v1.0</SidebarFooter>
    </Sidebar>
  );
}
