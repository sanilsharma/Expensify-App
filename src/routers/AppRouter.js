import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage/ExpenseDashBoardPage";
import AddExpensePage from "../components/AddExpensePage/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage/EditExpensePage";
import HelpPage from "../components/HelpPage/HelpPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Header from "../components/Header/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
