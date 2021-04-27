import '../Search/Search.css';
import moon from '../../img/profile/moon.svg';
import bell from '../../img/profile/bell.svg';
import userphoto from '../../img/profile/userphoto.svg';
import arrow from '../../img/profile/arrow.svg';

const Search = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <div className="profile">
          <img src={moon} className="profile-img" alt="moon" />
          <img src={bell} className="profile-img" alt="bell" />
          <img src={userphoto} className="profile-img photo" alt="photo" />
          <img src={arrow} className="profile-img" alt="arrow" />
        </div>
      </div>

    </>
  );
}

export default Search;