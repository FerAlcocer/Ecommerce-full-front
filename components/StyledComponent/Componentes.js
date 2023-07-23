import Link from "next/link";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #222;
`;

export const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

export const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

export const StyleNav = styled.nav`
  display: flex;
  gap: 15px;
`;

export const Bg = styled.div`
  background-color: #222;
  color: #fff;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;
