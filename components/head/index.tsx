import { useRouter } from "next/router";
import LoginModal from "@/components/modal/LoginModal";
import CadastroModal from "@/components/modal/CadastroModal";

export const Logo = () => {
    const r = useRouter()
  return (
    <><img src="/logo.png" alt="" className="h-12"/></>
  );
};

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownMenu,
  DropdownTrigger,
  Avatar,
  Dropdown,
  DropdownItem,
} from "@heroui/react";
import { img } from "framer-motion/client";


export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isCadastroModalOpen, setIsCadastroModalOpen] = React.useState(false);
  var dataUser = {
    image:"https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email:"zoey@example.com",
    name:"zoey",
    age:"22",
    isLogin:false,
  }
  const menuItems = [
    {name:"Inicio",ref:"/"},
    {name:"Desenvolvedor",ref:"https://www.linkedin.com/in/marco-antonio-aa3024233"},
    {name:"Github",ref:"https://github.com/marco0antonio0/RespondeAI-front"},
  ];
  const router = useRouter()
  const isActive = (path: string) => router.pathname === path;
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}  isBlurred={true} shouldHideOnScroll className="mt-0 sm:mt-16">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className={`${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://www.linkedin.com/in/marco-antonio-aa3024233" className={`ml-5 ${
              isActive("https://www.linkedin.com/in/marco-antonio-aa3024233") ? "text-primary" : "text-foreground"
            }`}>
            Desenvolvedor
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="https://github.com/marco0antonio0/RespondeAI-front" className={`ml-5 ${
              isActive("/github") ? "text-primary" : "text-foreground"
            }`}>
            Github
          </Link>
        </NavbarItem>

      </NavbarContent>
      {dataUser.isLogin?null:
      <NavbarContent justify="end">
        <div className="hidden lg:flex">
          
          <CadastroModal isOpen={isCadastroModalOpen} onClose={() => setIsCadastroModalOpen(false)} />
        </div>
      </NavbarContent>}
      <NavbarMenu className="w-[100%] h-[100%] py-10">
        {menuItems.map((item, index) => {
            return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className={`w-[100%] h-[100%] text-2xl ${
                    isActive(item.ref) ? "text-primary" : "text-foreground"
                  }`}
                    href={item.ref}
                    size="lg"
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              )
        })}
      </NavbarMenu>
      
     {dataUser.isLogin ?
     <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={dataUser.name}
              size="sm"
              src={dataUser.image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Conectado como</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Configurações</DropdownItem>
   
            <DropdownItem key="help_and_feedback">Ajuda e Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Sair
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>:null}
    </Navbar>
  );
}

