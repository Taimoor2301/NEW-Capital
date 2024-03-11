import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WalletCardsWrapper from "../../warpper/cards/WalletCardsWrapper";
import VirtualCardsWrapper from "../../warpper/cards/VirtualCardsWrapper";
import RewardCardsWrapper from "../../warpper/cards/RewardCardsWrapper";
import CartItemsWarapper from "../../warpper/Cart/CartItemsWarapper";
import FilterCardsSakook from "../filtercards/FilterCardsSakook";
import Transaction from "../card/Transaction";
import ProfileSetting from "../card/ProfileSetting";
import ProfileInfo from "../forms/ProfileInfo";
import Preferences from "../forms/Preferences";
import Payment from "../forms/Payment";
import DashboardFilterCard from "../filtercards/DashboardFilterCard";
import Portfolio from "../../warpper/cards/Portfolio";
import Pagination from "../pagination/Pagination";
import { Container } from "react-bootstrap";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/homes"
        element={
          <>
            <DashboardFilterCard />
            <Pagination/>
          </>
        }
      />
      <Route
        path="/wallet"
        element={
          <>
          <Container style={{borderRadius:"8px", backgroundColor:"white"}}>
            <WalletCardsWrapper />
            <Transaction />
            <VirtualCardsWrapper />

          </Container>
          </>
        }
      />
      <Route path="/portfolio" element={ <Portfolio/>} />
      <Route
        path="/reward"
        element={
          <>
            <RewardCardsWrapper />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <CartItemsWarapper />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <ProfileSetting />
          </>
        }
      />
      <Route
        path="/account"
        element={
          <>
            <ProfileInfo />
          </>
        }
      />
      <Route
        path="/Preferences"
        element={
          <>
            <Preferences />
          </>
        }
      />
      <Route
        path="/checkout"
        element={
          <>
            <Payment />
          </>
        }
      />
    </Routes>
  );
};

export default AppRouter;
