import React, { useState, useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdSchool,
  MdCloudUpload,
  MdSettings,
  MdLogout,
  MdAnalytics,
  MdAccountBalance,
  MdGroups,
  MdKeyboardArrowRight,
  MdSecurity,
  MdSearch,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

function SideNav({ onLinkClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navGroups = [
    {
      title: "Main Menu",
      links: [
        { id: 1, name: "Overview", route: "home", icon: <MdDashboard size={22} /> },
        { id: 2, name: "Analytics", route: "analytics", icon: <MdAnalytics size={22} />, disabled: true },
      ],
    },
    {
      title: "Management",
      links: [
        { id: 3, name: "Teachers", route: "teacher", icon: <FaChalkboardTeacher size={22} /> },
        { id: 4, name: "Students", route: "student", icon: <MdGroups size={22} /> },
      ],
    },
    {
      title: "Academic",
      links: [
        { id: 5, name: "Results Ledger", route: "upload-result", icon: <MdCloudUpload size={22} /> },
        { id: 6, name: "Curriculum", route: "curriculum", icon: <MdSchool size={22} />, disabled: true },
      ],
    },
    {
      title: "Administration",
      links: [
        { id: 7, name: "Finance", route: "finance", icon: <MdAccountBalance size={22} />, disabled: true },
        { id: 8, name: "Settings", route: "settings", icon: <MdSettings size={22} />, disabled: true },
      ],
    },
  ];

  /* ---------- Search Filter ---------- */
  const filteredGroups = useMemo(() => {
    if (!searchQuery) return navGroups;

    return navGroups
      .map((group) => ({
        ...group,
        links: group.links.filter((link) =>
          link.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((group) => group.links.length > 0);
  }, [searchQuery]);

  /* ---------- Active Route ---------- */
  const isActive = (route) => {
    return location.pathname.includes(route);
  };

  return (
    <div
      className={`h-screen bg-[#020617] text-white flex flex-col border-r border-white/5 relative overflow-hidden transition-all duration-500 ${
        isCollapsed ? "w-[90px]" : "w-[260px]"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -right-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />

      {/* Header */}
      <div
        className={`p-6 flex items-center gap-3 ${
          isCollapsed ? "justify-center" : ""
        }`}
      >
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition"
        >
          <MdSecurity size={26} />
        </div>

        {!isCollapsed && (
          <div>
            <h2 className="text-lg font-bold">
              Admin <span className="text-blue-400">Panel</span>
            </h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              Excellence Int. School
            </p>
          </div>
        )}
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="px-5 mb-6">
          <div className="relative">
            <MdSearch className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 space-y-6 custom-scrollbar">
        {filteredGroups.map((group, index) => (
          <div key={index}>
            {!isCollapsed && (
              <p className="text-[10px] text-gray-500 uppercase ml-3 mb-2">
                {group.title}
              </p>
            )}

            <div className="space-y-1">
              {group.links.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.disabled ? "#" : link.route}
                  onClick={(e) => {
                    if (link.disabled) e.preventDefault();
                    if (onLinkClick) onLinkClick();
                  }}
                  title={isCollapsed ? link.name : ""}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition group
                  
                  ${
                    isActive(link.route)
                      ? "bg-blue-600/10 border border-blue-500/20 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }

                  ${link.disabled ? "opacity-40 cursor-not-allowed" : ""}
                  
                  ${isCollapsed ? "justify-center" : ""}
                  `}
                >
                  <div
                    className={`${
                      isActive(link.route)
                        ? "text-blue-400"
                        : "group-hover:text-blue-400"
                    }`}
                  >
                    {link.icon}
                  </div>

                  {!isCollapsed && (
                    <>
                      <span className="text-sm font-semibold">{link.name}</span>

                      {!link.disabled && !isActive(link.route) && (
                        <MdKeyboardArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-12 bg-blue-600 rounded-full items-center justify-center text-white"
      >
        {isCollapsed ? <MdChevronRight /> : <MdChevronLeft />}
      </button>

      {/* Footer */}
      <div className="p-5 border-t border-white/5">
        <button
          onClick={() => navigate("/admin-login")}
          className={`w-full flex items-center gap-3 text-red-400 hover:bg-red-500/10 rounded-xl py-3 px-3 ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <MdLogout size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default SideNav;