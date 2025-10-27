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

export function makeIconComponent(
  icon: SimpleIcon,
  baseClass = "h-5 w-auto sm:h-6"
): React.FC<React.SVGProps<SVGSVGElement>> {
  const Base = fromSimpleIconData(icon);
  const IconComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const cls = [baseClass, props.className].filter(Boolean).join(" ");
    return <Base {...props} className={cls} />;
  };
  IconComponent.displayName = `${icon.title || "Icon"}Icon`;
  return IconComponent;
}
