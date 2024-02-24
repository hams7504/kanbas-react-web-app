import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaPaintBrush , FaCreativeCommons, FaHandsHelping, FaNeos } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: " ",   icon: <FaNeos   className="fs-2" />  },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox  className="fs-2" /> },
    { label: "History",  icon: <FaHistory  className="fs-2" /> },
    { label: "Studio",  icon: <FaPaintBrush className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} id={link.label === "Account" ? "user-icon" : ""} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link id={link.label === "Account" ? "user-icon" : ""} to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;