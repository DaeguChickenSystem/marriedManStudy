import React from "react";
import styled from "styled-components";
import Counter from "./counter";

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	color: ${(props) => props.theme.MAIN_BLUE}; // theme.js에서 가져온것
`;

const Index: React.FC = () => {
  return (
      <div>
       <Counter/>
      </div>
  );
};
export default Index;