import React from "react";

const navigationLinks = [
  { id: "home", label: "Home", icon: "fas fa-home" },
  { id: "about", label: "About", icon: "fas fa-info-circle" },
  { id: "skills", label: "Skills", icon: "fas fa-cogs" },
  { id: "projects", label: "Projects", icon: "fas fa-cogs" },
  { id: "contact", label: "Contact", icon: "fas fa-envelope" },
];

interface BottomNavProps {
  activeSection: string;
  handleNavigation: (id: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({
  activeSection,
  handleNavigation,
}) => {
  return (
    <div className="bottom-nav">
      <ul>
        {navigationLinks.map(({ id, label, icon }) => (
          <li key={id}>
            <button
              className={`nav-button ${activeSection === id ? "active" : ""}`}
              onClick={() => handleNavigation(id)}
            >
              <i className={icon}></i> {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNav;
