import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";

export default function Layout({children} : {children : React.ReactNode}) {
  return <SidebarWrapper>{children}</SidebarWrapper>;
}