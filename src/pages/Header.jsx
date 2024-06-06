import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image'

export default function Header(props) {
  const menuItems = [
    'Home',
    'Products',
    'About'
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden " justify="center">
        <NavbarBrand>
            <Link href="/">
                    <Image
                            src="/vercel.svg"
                            alt="TryWorth"
                            width={90}
                            height={20}
                            class="flex justify-center"
                    />
            </Link>
        </NavbarBrand>
      </NavbarContent>
      
      <NavbarContent className="sm:hidden" justify="end">
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
            <Link href="/">
                    <Image
                            src="/vercel.svg"
                            alt="TryWorth"
                            width={90}
                            height={20}
                    />
            </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            ホーム
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/products" color="foreground">
            製品
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            企業理念
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/inquiry">
            お問い合わせ
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
            <Link color="foreground" href="/">
                ホーム
            </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
            <Link color="foreground" href="/products">
                製品
            </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
            <Link color="foreground" href="/about">
                企業理念
            </Link>
        </NavbarMenuItem>
        <NavbarItem>
          <Link color="foreground" href="/inquiry">
            お問い合わせ
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
