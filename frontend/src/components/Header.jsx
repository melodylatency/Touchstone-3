import { useNavigate } from "react-router-dom";
import { Badge, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Icons
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/slices/usersApiSlice";
import { logout } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Brand className="px-3">
            <div className="flex flex-row items-center gap-2">
              <img className="w-10 h-10" src="/images/logo.png" alt="logo" />
              <p>Bloom Valley Nursery</p>
            </div>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto px-2 gap-2">
            <LinkContainer to="/about">
              <Nav.Link className="d-flex align-items-center">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/events">
              <Nav.Link className="d-flex align-items-center">Events</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link className="d-flex align-items-center gap-2">
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg="info">
                    {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <NavDropdown
                className="w-full"
                title={userInfo.name}
                id="username"
                align="end"
              >
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="d-flex align-items-center gap-2">
                  <FaUser /> Login
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
