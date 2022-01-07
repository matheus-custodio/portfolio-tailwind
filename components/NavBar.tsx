import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavItem from './NavItem';

function NavBar() {
  const [active, setActive] = useState('');

  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') setActive('About');
    if (router.pathname === '/projects') setActive('Projects');
    if (router.pathname === '/resume') setActive('Resume');
  }, []);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-cyan-light dark:border-cyan-dark">
        {active}
      </span>
      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
}

export default NavBar;
