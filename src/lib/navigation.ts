import { useEffect } from "react";

const PENDING_SECTION_KEY = "deployer:pending-section";
const SCROLL_RETRY_LIMIT = 8;
const SCROLL_RETRY_DELAY = 120;

type PendingSection = {
  route: string;
  sectionId: string;
};

const normalizeRoute = (route: string) => {
  if (!route || route === "#" || route === "#/") {
    return "/";
  }

  if (route.startsWith("#")) {
    return normalizeRoute(route.slice(1));
  }

  return route.startsWith("/") ? route : `/${route}`;
};

const getCurrentRoute = () => {
  const rawHash = window.location.hash || "#/";
  const route = rawHash.slice(1).split("?")[0];
  return normalizeRoute(route);
};

const attemptScroll = (sectionId: string, attempt = 0) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (attempt >= SCROLL_RETRY_LIMIT) {
    return;
  }

  window.setTimeout(() => {
    attemptScroll(sectionId, attempt + 1);
  }, SCROLL_RETRY_DELAY);
};

export const buildHashRoute = (route: string) => `#${normalizeRoute(route)}`;

export const goToPage = (route: string) => {
  const target = buildHashRoute(route);

  if (window.location.hash === target) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  window.location.hash = target;
};

export const goToSection = (route: string, sectionId: string) => {
  const normalizedRoute = normalizeRoute(route);

  if (getCurrentRoute() === normalizedRoute) {
    attemptScroll(sectionId);
    return;
  }

  const payload: PendingSection = {
    route: normalizedRoute,
    sectionId,
  };

  window.sessionStorage.setItem(PENDING_SECTION_KEY, JSON.stringify(payload));
  goToPage(normalizedRoute);
};

export const usePendingSection = (route: string) => {
  useEffect(() => {
    const rawPayload = window.sessionStorage.getItem(PENDING_SECTION_KEY);

    if (!rawPayload) {
      return;
    }

    try {
      const payload = JSON.parse(rawPayload) as PendingSection;

      if (payload.route !== normalizeRoute(route)) {
        return;
      }

      window.sessionStorage.removeItem(PENDING_SECTION_KEY);
      attemptScroll(payload.sectionId);
    } catch {
      window.sessionStorage.removeItem(PENDING_SECTION_KEY);
    }
  }, [route]);
};
