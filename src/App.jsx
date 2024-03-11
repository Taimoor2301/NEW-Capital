// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Sell from "./pages/Sell";
import Contacts from "./pages/Contacts";
import SplashScreen from "./pages/SplashScreen";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import PublicLayout from "./Layout/PublicLayout";
import Dashboard from "./pages/Dashboard";
import ProtectedLayout from "./Layout/ProtectedLayout";
import { Container } from "react-bootstrap";
import WalletCardsWrapper from "./warpper/cards/WalletCardsWrapper";
import Transaction from "./components/card/Transaction";
import VirtualCardsWrapper from "./warpper/cards/VirtualCardsWrapper";
import Portfolio from "./warpper/cards/Portfolio";
// eslint-disable-next-line no-unused-vars
import RewardCardsWrapper from "./warpper/cards/RewardCardsWrapper";
// eslint-disable-next-line no-unused-vars
import CartItemsWarapper from "./warpper/Cart/CartItemsWarapper";
import ProfileSetting from "./components/card/ProfileSetting";
import ProfileInfo from "./components/forms/ProfileInfo";
import Preferences from "./components/forms/Preferences";
import Payment from "./components/forms/Payment";
import AuthLayout from "./Layout/AuthLayout";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />

        <Route path="/page" element={<PublicLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="sell" element={<Sell />} />
          <Route path="contact" element={<Contacts />} />
        </Route>

        <Route path={"/user"} element={<ProtectedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="wallet"
            element={
              <>
                <Container
                  style={{ borderRadius: "8px", backgroundColor: "white" }}
                >
                  <WalletCardsWrapper />
                  <Transaction />
                  <VirtualCardsWrapper />
                </Container>
              </>
            }
          />
          <Route path="portfolio" element={<Portfolio />} />
          {/* <Route path="reward" element={<RewardCardsWrapper />} /> */}
          {/* <Route path="cart" element={<CartItemsWarapper />} /> */}
          <Route path="profile" element={<ProfileSetting />} />
          <Route path="account" element={<ProfileInfo />} />
          <Route path="Preferences" element={<Preferences />} />
          <Route path="checkout" element={<Payment />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
