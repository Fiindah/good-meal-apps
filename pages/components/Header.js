const Header = () => {
  return (
      <header className='navbar-container'>
      <div>
        <h1 className='header-title'>Good Meal</h1>
      </div>
      <nav className='nav-list'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Favorite</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
