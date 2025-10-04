import React from "react";
import type { SimpleIcon } from "simple-icons";

export const fromSimpleIconData = (icon: SimpleIcon) => {
  const Comp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" aria-label={icon.title} {...props}>
      <title>{icon.title}</title>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );

  Comp.displayName = `SI.${icon.slug ?? icon.title}`;
  return Comp;
};
