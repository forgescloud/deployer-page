import type { MouseEvent, ReactNode } from "react";

import { buildHashRoute, goToPage } from "@/lib/navigation";

type HashNavLinkProps = {
  to: string;
  className?: string;
  children: ReactNode;
  title?: string;
};

const HashNavLink = ({ to, className, children, title }: HashNavLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    goToPage(to);
  };

  return (
    <a
      href={buildHashRoute(to)}
      onClick={handleClick}
      className={className}
      title={title}
    >
      {children}
    </a>
  );
};

export default HashNavLink;
