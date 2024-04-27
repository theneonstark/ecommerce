export default function NavBar() {
  return (
    <>
      <header className="hidden md:flex justify-center items-center px-10 py-2">
        <h1 className=" text-2xl">Kamla Store</h1>
        <div className="search flex items-center px-24">
          <input type="search" className=" border-2 rounded-md w-96 p-2" />
          <box-icon name="search-alt"></box-icon>
        </div>
        <div className="account_container flex align-center">
          <box-icon name="user"></box-icon>
          <a href="">account</a>
        </div>
        <div className="cart_container flex align-center px-14">
          <box-icon name="cart-alt"></box-icon>
          <a href="">Cart</a>
        </div>
      </header>
      <hr />
      <nav className="nav py-2 flex justify-center mx-auto max-w-[1380px]">
        <div className="menu_container flex space-x-60">
            <div className="flex ">
              <box-icon Name="menu"></box-icon>
              <p>Browse All Categories</p>
            </div>
          <ul className="flex justify-center space-x-14">
            <li className="flex">
              <p>Demos</p>
              <box-icon name="chevron-down"></box-icon>
            </li>
            <li className="flex">
              <p>Categories</p>
              <box-icon name="chevron-down"></box-icon>
            </li>
            <li className="flex">
              <p>Mega Menu</p>
              <box-icon name="chevron-down"></box-icon>
            </li>
            <li className="flex">
              <p>Vendor</p>
              <box-icon name="chevron-down"></box-icon>
            </li>
            <li className="flex">
              <p>Pages</p>
              <box-icon name="chevron-down"></box-icon>
            </li>
            <li className="flex">
              <p>Blog</p>
              <box-icon name="chevron-down"></box-icon>
            </li>
            <li className="flex">
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
