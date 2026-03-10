import type { MouseEvent, ReactNode } from "react";

import { buildHashRoute, goToPage, goToSection } from "@/lib/navigation";

type HashNavLinkProps = {
  to: string;
  sectionId?: string;
  className?: string;
  children: ReactNode;
  title?: string;
};

const HashNavLink = ({ to, sectionId, className, children, title }: HashNavLinkProps) => {
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
    if (sectionId) {
      goToSection(to, sectionId);
      return;
    }

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
