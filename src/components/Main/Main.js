import '../Main/Main.css';
import users from '../../data/users.json';
import calendar from '../../img/profile/calendar.svg';
import arrow from '../../img/profile/arrow.svg';
import useradd from '../../img/profile/useradd.svg';

const Main = () => {

  const daysOfWeek =
    [
      { name: 'Mon', number: 19 },
      { name: 'Tue', number: 20 },
      { name: 'Wed', number: 21 },
      { name: 'Thu', number: 22 },
      { name: 'Fri', number: 23 },
      { name: 'Sat', number: 24 },
      { name: 'Sun', number: 25 }
    ];

  const getDayOfWeek = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    return day;
  }
  const getTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours(timestamp);
    const minutes = date.getMinutes(timestamp);
    return `${hours}:${minutes}`;
  }

  const getHours = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours(timestamp);
    return hours;
  }

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
              <th><div className="members-list"><div className="members-title">Members</div><img src={useradd} /></div></th>
              {daysOfWeek.map(item => <th><div className="days-of-week">{item.name}<br /><div className="number-of-week">{item.number}</div></div></th>)}
            </tr>
          </thead>
          <tbody>
            {users.map(item => (
              <tr className="users" key={item.id}>
                <td><div className="users-data"><img src={item.img} className="members-img" /><div className="user-name-block"><div className="user-name">{item.name}</div><div className="user-position">{item.position}</div></div><img src={arrow} /></div></td>
                {daysOfWeek.map(({ number }) => {
                  const tasksForThisDay = item.tasks.filter(({ timestamp }) =>
                    number === getDayOfWeek(timestamp)
                  ).sort((a, b) => getHours(a.timestamp) - getHours(b.timestamp));
                  return <td className='task'>{tasksForThisDay.map(({ timestamp, name, color }) => <div className={color}>{getTime(timestamp)}<br />{name}</div>)}</td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Main;