import React, { useState } from "react";
import "../App.css";
import "../font.css";
import { Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Fragment } from "react";

import Home from "./Home";
import Board from "./Board";
import Setting from "./Setting";

function changeMenu(index, setCurPage) {
  setCurPage({ page: index });
}

function Main(props) {
  const [curPage, setCurPage] = useState({ page: "/" });
  console.log(curPage);
  return (
    <Fragment>
      <TitleText>REACT BOARD 📰</TitleText>

      <MainContainer>
        <NavMenu>
          <ul>
            <NavList>
              <NavLink
                to="/"
                curPage={curPage.page}
                onClick={() => changeMenu("/", setCurPage)}
              >
                홈
              </NavLink>
            </NavList>
            <NavList>
              <NavLink
                to="Board"
                curPage={curPage.page}
                onClick={() => changeMenu("Board", setCurPage)}
              >
                자유게시판
              </NavLink>
            </NavList>
            <NavList>
              <NavGithub href="https://github.com/kyoung-jnn" target="_blank">
                깃허브
              </NavGithub>
            </NavList>

            <NavList>
              <NavLink
                to="Setting"
                curPage={curPage.page}
                onClick={() => changeMenu("Setting", setCurPage)}
              >
                설정
              </NavLink>
            </NavList>
          </ul>
        </NavMenu>
        <Switch>
          <Route exact path="/" render={(props) => <Home></Home>}></Route>
          <Route path="/Board" render={(props) => <Board></Board>}></Route>
          <Route
            path="/Setting"
            render={(props) => <Setting></Setting>}
          ></Route>
        </Switch>
      </MainContainer>
    </Fragment>
  );
}

const MainContainer = styled.body`
  display: grid;
  width: 90%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  box-shadow: 20px 20px 60px #bababa, -20px -20px 60px #fcfcfc;
`;

const TitleText = styled.header`
  text-align: center;
  height: 10%;
  font-size: 45px;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
`;

const NavMenu = styled.nav`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const NavList = styled.li`
  display: inline;
  margin: 10px;
  padding: 0px;
  height: 0px;
  font-size: 25px;
  font-family: "KOTRA_BOLD-Bold", sans-serif;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.to == props.curPage ? "#000" : "#b2bec3")};
  &:hover {
    color: #2d3436;
    transition: color ease-in 0.3s;
  }
`;

const NavGithub = styled(NavLink.withComponent("a"))`
  color: #b2bec3;
`;
export default Main;
