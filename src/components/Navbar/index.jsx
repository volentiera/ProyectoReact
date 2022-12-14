/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const categories = [
  {
    name: "Indumentaria",
    href: "#",
    key: "1",
    type: "indumentaria",
    icon: ChartBarIcon,
  },
  {
    name: "Accesorios",
    href: "#",
    key: "2",
    type: "accesorio",
    icon: CursorClickIcon,
  },
  {
    name: "Calzado",
    href: "#",
    key: "3",
    type: "calzado",
    icon: ShieldCheckIcon,
  },
];

const resources = [
  {
    name: "Redes Sociales",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Metodos de pago",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Descuentos",
    href: "#",
    icon: CalendarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <Popover className="relative bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to={"/"}>
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-white",
                      "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-800"
                    )}
                  >
                    <span>Categorias</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-white" : "text-white",
                        "ml-2 h-5 w-5 group-hover:text-white"
                      )}
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
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 ">
                          {categories.map((item) => (
                            <Link key={item.key} to={`/category/${item.type}`}>
                              <button
                                key={item.name}
                                href={item.href}
                                className="flex items-start p-3 -m-3 rounded-lg"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link to={"/"}>
              <button className="text-base font-medium text-white hover:text-gray-200">
                Inicio
              </button>
            </Link>
            <button className="text-base font-medium text-white hover:text-gray-200">
              Sobre Nosotros
            </button>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-white",
                      "group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-800"
                    )}
                  >
                    <span>Mas</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
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
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 w-6 h-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          {cart.length > 0 ? (
            <div className=" justify-end hidden text-xl text-white md:flex md:flex-1 lg:w-0">
              <Link to={"/cart"}>
                <button className="flex p-1 pl-3 pr-3 bg-gray-600 rounded hover:bg-gray-500 hover:scale-125">
                  <CartWidget />
                  <h2 className="pl-1">{cart.length}</h2>
                </button>
              </Link>
            </div>
          ) : (
            <div className="items-center justify-end hidden text-gray-200 md:flex md:flex-1 lg:w-0">
              Carrito Vacio
            </div>
          )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {categories.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
