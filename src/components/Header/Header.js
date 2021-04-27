import '../Header/Header.css';
import dashboard from '../../img/dashboard.svg';
import briefcase from '../../img/briefcase.svg';
import format from '../../img/format.svg';
import calendar from '../../img/calendar-dates.svg';
import time from '../../img/time.svg';
import vector from '../../img/Vector.svg';
import chart from '../../img/chart.svg';
import options from '../../img/options.svg';
import help from '../../img/help.svg';


const Header = () => {
  return (
    <>
      <div className="container-header">
        <div className="header">
          <p>.Week</p>
        </div>
        <nav className="navigation">
          <ul className="list">
            <li className="item"><img src={dashboard} alt="" /><a href="/" className="item-link">Dashboard</a></li>
            <li className="item"><img src={briefcase} alt="" /><a href="/" className="item-link">Projects</a></li>
            <li className="item"><img src={format} alt="" /><a href="/" className="item-link">Tasks</a></li>
            <li className="item active"><img src={calendar} alt="" /><a href="/" className="item-link">Schedule</a></li>
            <li className="item"><img src={time} alt="" /><a href="/" className="item-link">Time Manage</a></li>
            <li className="item"><img src={vector} alt="" /><a href="/" className="item-link">Teams</a></li>
            <li className="item"><img src={chart} alt="" /><a href="/" className="item-link">Reports</a></li>
          </ul>
        </nav>
        <nav className="navigation-footer">
          <ul className="list">
            <li className="item"><img src={options} alt="" /><a href="/" className="item-link">Settings</a></li>
            <li className="item"><img src={help} alt="" /><a href="/" className="item-link">Help</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;