import '../Main/Main.css';
import users from '../../data/users.json';
import calendar from '../../img/profile/calendar.svg';

const Main = () => {


  return (
    <>
      <main className="main-container">
        <div className="header-main">
          <h2 className="title">Schedule</h2>
          <div className="date">
            <div className="duration">
              <button className="button-duration">Week</button>
              <button className="button-duration">Month</button>
              <button className="button-duration">Year</button>
            </div>

            <div className="current-date">
              <img src={calendar} alt="calendar" className="img-date" />
              <p className="month">April 2021</p>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Members</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
          {users.map(item => (
            <tbody>
              <tr className="users">
                <td className="users-data"><img src={item.img} className="members-img" />{item.name}<br />{item.position}</td>
                <td><div className="task">{item.timestemp.mon.task}</div></td>
                <td><div className="task">{item.timestemp.tue.task}</div></td>
                <td><div className="task">{item.timestemp.wed.task}</div></td>
                <td><div className="task">{item.timestemp.thu.task}</div></td>
                <td><div className="task">{item.timestemp.fri.task}</div></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          ))}

        </table>
      </main>
    </>
  );
}

export default Main;