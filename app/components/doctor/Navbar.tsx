import React from "react";
import { NavLink, type NavLinkProps } from "react-router";
import { Button } from "../ui/button";

// Base Navbar root
type NavbarProps = React.HTMLAttributes<HTMLElement>;

const NavbarRoot: React.FC<NavbarProps> = ({ children, ...props }) => (
  <nav {...props}>{children}</nav>
);

// Brand
type BrandProps = {
  logoSrc?: string;
  title?: string;
  imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  titleProps?: React.HTMLAttributes<HTMLParagraphElement>;
} & React.HTMLAttributes<HTMLDivElement>;

const Brand: React.FC<BrandProps> = ({
  logoSrc,
  title = "Phudu",
  imageProps,
  titleProps,
  ...rest
}) => (
  <div className="flex items-center gap-2" {...rest}>
    {logoSrc && (
      <img src={logoSrc} alt="logo" className="h-8 w-8" {...imageProps} />
    )}
    <p className="font-bold text-lg" {...titleProps}>
      {title}
    </p>
  </div>
);

// Links
type NavItem = {
  label: string;
} & NavLinkProps;

type LinksProps = {
  items: NavItem[];
} & React.HTMLAttributes<HTMLUListElement>;

const Links: React.FC<LinksProps> = ({ items, ...props }) => (
  <ul className="flex gap-4" {...props}>
    {items.map(({ label, ...navLinkProps }, idx) => (
      <li key={idx}>
        <NavLink
          {...navLinkProps}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-black"
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

// Action Button
type ActionButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
} & React.ComponentProps<typeof Button>;

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  onClick,
  ...props
}) => (
  <Button onClick={onClick} {...props}>
    {children}
  </Button>
);

// Compound Component
const Navbar = NavbarRoot as React.FC<NavbarProps> & {
  Brand: typeof Brand;
  Links: typeof Links;
  Button: typeof ActionButton;
};

Navbar.Brand = Brand;
Navbar.Links = Links;
Navbar.Button = ActionButton;

export { Navbar };
