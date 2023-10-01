import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { PhoneIcon, PlayCircleIcon, ClipboardDocumentListIcon, PresentationChartBarIcon, ChatBubbleLeftRightIcon, BeakerIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';

import { HeaderLink, MenuResponsivenessNavProps } from '@app/shared/types';
import navigation from '@data/header-links.json';

const iconComponents: any = {
  PresentationChartBarIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  PhoneIcon,
  PlayCircleIcon
};

const menuList = navigation.map((item: HeaderLink) => ({
  ...item,
  subMenu: item.subMenu && {
    ...item.subMenu,
    items: item.subMenu.items.map((subItem: any) => ({
      ...subItem,
      icon: iconComponents[subItem.icon] || null,
    })),
    callsToAction: item.subMenu.callsToAction.map((subItem: any) => ({
      ...subItem,
      icon: iconComponents[subItem.icon] || null,
    })),
  },
}));

const NavPopOver = (name: string, items: any[], callsToAction: any[]) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-200 focus-visible:ring-0 focus-visible:outline-none">
              {name}
              <ChevronDownIcon
                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none text-gray-100')}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-2 rounded-lg p-2 text-sm leading-3 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 font-light text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
};

const DesktopNav: React.FC<MenuResponsivenessNavProps> = (props) => {
  const { mobileMenuOpen, setMobileMenuOpen } = props;

  return (
    <><div className="flex md:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

      <div className="hidden md:flex md:gap-x-12">
        {menuList.map((item: any) => {
          if (item.subMenu) {
            return (
              <React.Fragment key={item.name}>
                {NavPopOver(item.name, item.subMenu.items, item.subMenu.callsToAction)}
              </React.Fragment>
            );
          } else {
            return (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-200">
                {item.name}
              </Link>
            );
          }
        })}
      </div></>
  );
};

export default DesktopNav;
