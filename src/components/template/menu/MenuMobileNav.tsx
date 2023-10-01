import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { MenuResponsivenessNavProps } from "@app/shared/types";
import navigation from "@data/header-links.json";

const NavDisclosure = (
  props: MenuResponsivenessNavProps,
  name: string,
  items: any[],
  callsToAction: any[]
) => {
  const { mobileMenuOpen, setMobileMenuOpen } = props;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="div" defaultOpen={true} className="-mx-3">
      {({ open = mobileMenuOpen }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black hover:bg-gray-50">
            {name}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {[...items, ...callsToAction].map((item) => (
              <Disclosure.Button
                key={item.name}
                as={Link}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const MobileNav: React.FC<MenuResponsivenessNavProps> = (props) => {
  const { mobileMenuOpen, setMobileMenuOpen } = props;

  return (
    <>
      {navigation.map((item: any) => {
        if (item.subMenu) {
          return (
            <React.Fragment key={item.name}>
              {NavDisclosure(
                props,
                item.name,
                item.subMenu.items,
                item.subMenu.callsToAction
              )}
            </React.Fragment>
          );
        } else {
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          );
        }
      })}
    </>
  );
};

export default MobileNav;
