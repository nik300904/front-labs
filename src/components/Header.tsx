import { Link } from "react-router-dom";
import { Button, Flex } from "antd";
import {
  PAGINTAION_ROUTE,
  ANOTHER_ROUTE,
  NEW_ROUTE,
} from "../app/routing/config";
import Routing from "../app/routing/Routing";
import { StyledProps } from "../pages/new_page";
import styled from "styled-components";

interface HeaderProps {
  isAuthenticated: boolean;
  handleAuthentication: () => void;
}

const HeaderWrapper = styled.div<StyledProps>`
  max-width: max-content;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 5px;
`;

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  handleAuthentication,
}) => {
  return (
    <header className="header">
      <HeaderWrapper>
        <div>
          <Flex gap="middle" justify={"center"} align={"center"}>
            <Link to={PAGINTAION_ROUTE}>
              <Button>Look Pagination</Button>
            </Link>
            <Link to={ANOTHER_ROUTE}>
              <Button>Another Page</Button>
            </Link>
            <Routing
              path={NEW_ROUTE}
              isAuthenticated={isAuthenticated}
            />
            <Button onClick={handleAuthentication}>
              {isAuthenticated ? "Выйти" : "Войти"}
            </Button>
          </Flex>
        </div>
      </HeaderWrapper>
    </header>
  );
};

export default Header;