import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: calc(100% / 3);
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tag" />
            标签
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money" />
            记账
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics" />
            统计
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
