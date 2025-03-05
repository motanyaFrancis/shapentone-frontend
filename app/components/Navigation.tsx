'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";
import clsx from "clsx";

type NavigationItem = {
    name: string;
    href: string;
    current: boolean;
};

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Programs', href: '#', current: false },
    { name: 'Articles', href: '#', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const MobileMenuButton = ({ open }: { open: boolean }) => (
    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
        <span className="sr-only">Open main menu</span>
        {open ? <XMarkIcon className="block size-6" aria-hidden="true" /> : <Bars3Icon className="block size-6" aria-hidden="true" />}
    </DisclosureButton>
);

const NavLinks = () => (
    <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-3">
            {navigation.map((item) => (
                <Link key={item.name} href={item.href} className={classNames(item.current ? 'text-lime-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-base font-bold')}>
                    {item.name}
                </Link>
            ))}
        </div>
    </div>
);

const UserProfileMenu = () => (
    <Menu as="div" className="relative ml-3">
        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
            <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" width={32} height={32} className="rounded-full" />
        </MenuButton>
        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
            {[{ name: 'Profile' }, { name: 'Settings' }, { name: 'Sign out' }].map(({ name }) => (
                <MenuItem key={name}>
                    {({ active }: { active: boolean }) => (
                        <Link href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-3 text-sm text-gray-700')}>
                            {name}
                        </Link>
                    )}
                </MenuItem>
            ))}
        </MenuItems>
    </Menu>
);

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className={clsx(
            "fixed top-0 w-full transition-colors duration-300 z-50 p-2",
            "lg:backdrop-blur-md lg:transition-all",
            scrolled ? "lg:bg-gray-900/90" : "md:bg-transparent",
            "bg-gray-900/95 backdrop-blur-md"
        )}>
            {({ open }: { open: boolean }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-24 items-center justify-between">
                            <div className="flex items-center">
                                <Image src="/logo.png" alt="Victor Fitness" width={120} height={32} />
                            </div>
                            <div className="flex items-center sm:hidden">
                                <MobileMenuButton open={open} />
                            </div>
                            <div className="hidden sm:flex sm:items-center">
                                <NavLinks />
                                <UserProfileMenu />
                            </div>
                        </div>
                    </div>
                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <DisclosureButton key={item.name} as={Link} href={item.href} className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-3 text-base font-medium border-b-1 border-gray-500')}>
                                    {item.name}
                                </DisclosureButton>
                            ))}
                            {/* <hr className="border-gray-700 my-2" /> */}
                            <div className="px-2">
                                {[{ name: 'Profile' }, { name: 'Settings' }, { name: 'Sign out' }].map(({ name }) => (
                                    <DisclosureButton key={name} as={Link} href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                        {name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
