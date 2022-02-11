import styled from "styled-components";
import { Button } from '@loopstarter/uikit'

const MenuButton = styled(Button)`
    color: #fff;
    padding: 0 8px;
    border-radius: 8px;
`
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
