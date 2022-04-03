import React, { useState } from "react";
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

interface Iprops {
	pageChange: (page: string) => void;
}

const LoginWrapper = () => {
	return (
		<div className="loginWraaper">
			<div className="head-title-wrap">
				<h3 className="head-title">로그인</h3>
			</div>
			<div className="inputWrapper">
				<div>
					<input />
				</div>
				<div>
					<input />
				</div>
			</div>
			<div className="buttonWrapper">
				<button>로그인</button>
			</div>
		</div>
	);
};

const SignInWrapper = () => {
	return (
		<div className="loginWraaper">
			<div className="head-title-wrap">
				<h3 className="head-title">
					회원가입
					<p>아이디와 이메일로 간편하게 시작하세요!</p>
				</h3>
			</div>
			<div className="inputWrapper">
				<div>
					<input />
				</div>
				<div>
					<input />
				</div>
				<div>
					<input />
				</div>
			</div>
			<div className="buttonWrapper">
				<button>가입하기</button>
			</div>
		</div>
	);
};

const Login: React.FC = () => {
	const [page, setPage] = useState("login");

	const pageChange = (page: string): void => {
		setPage(page);
	};

	const factory = () => {
		if (page === "login") {
			return <LoginWrapper />;
		} else if (page === "signin") {
			return <SignInWrapper />;
		}
	};
	return <div className="loginWraaper">{factory()}</div>;
};
export default Login;
