import Center from "./Center";
import {
  Logo,
  NavLink,
  StyleNav,
  StyledHeader,
  Wrapper,
} from "./StyledComponent/Componentes";

export default function Header() {
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyleNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart (0)</NavLink>
          </StyleNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
