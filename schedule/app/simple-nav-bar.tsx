"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, LinkIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ExportScheduleModal, MapModal } from "./modals";
import { CONSTS, NavItem } from "@/utils/constants";

export default function NavBar() {
  return (
    <div className="bg-white border-b border-gray-300 fixed w-full z-30">
      <>
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex justify-between w-full items-center">
              <h1 className="sm:text-2xl text-xl font-bold">
                Minifest Schedule
              </h1>
              <div className="flex items-center gap-3">
                <MapModal />
                <a
                  href={`https://minifest.is`}
                  target="_blank"
                  className="relative inline-flex items-center justify-center rounded-md p-1.5 bg-rose-400 text-white hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400"
                >
                  <LinkIcon className="h-5 w-5 stroke-2" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
