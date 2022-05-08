import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { login } from "../api/login";
const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 600px;
	height: 100vh;
	color: #333;
`;

const MainWrapperDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const LoginWrapperDiv = styled.div`
	width: 100%;
	text-align: center;
`;

const ButtonTypeOne = styled.button`
	margin-bottom: 10px;
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	background: green;
	color: white;
	border: 0px;
`;

const ButtonTypeTwo = styled.button`
	background: white;
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	border: 1px solid green;
	color: green;
`;

const ButtonWrapper = styled.div`
	padding-top: 10px;
	padding-bottom: 10px;
`;

const InputDiv = styled.input`
	width: 99%;
	padding-top: 10px;
	padding-bottom: 10px;
	border: 1px solid gray;
	border-radius: 2px;
	margin-bottom: 4px;
`;

const FontSize = styled.p`
	font-size: 12px;
	margin-top: 3px;
	text-align: left;
`;

interface Iprops {
	pageChange: (page: string) => void;
}

const LoginWrapper = (props: Iprops) => {
	const { pageChange } = props;
	const emailRef = useRef();
	const passwordRef = useRef();
	const loginApi = useCallback(() => {
		console.log(emailRef.current?.value);
		if (!emailRef.current) {
			return false;
		} else if (!passwordRef.current) {
			return false;
		} else {
			login(
				{
					email: emailRef.current?.value,
					password: passwordRef.current?.value,
				},
				(res) => {
					console.log(res);
				},
			);
		}
	}, []);

	return (
		<Main>
			<LoginWrapperDiv>
				<div className="head-title-wrap">
					<h3 className="head-title">로그인</h3>
				</div>
				<div className="inputWrapper">
					<InputDiv placeholder="이메일을 입력해주세요." ref={emailRef} />

					<InputDiv
						placeholder="비밀번호를 입력해주세요."
						type="password"
						ref={passwordRef}
					/>
				</div>
				<ButtonWrapper>
					<ButtonTypeOne onClick={loginApi}>로그인</ButtonTypeOne>
					<ButtonTypeTwo onClick={pageChange.bind(this, "signin")}>
						회원가입
					</ButtonTypeTwo>
				</ButtonWrapper>
			</LoginWrapperDiv>
		</Main>
	);
};

const Login: React.FC = () => {
	// const [page, setPage] = useState("login");
	const router = useRouter();
	const pageChange = (page: string): void => {
		console.log(page);
		router.push(`/login/${page}`);
	};

	return (
		<MainWrapperDiv>
			<LoginWrapper pageChange={pageChange} />
		</MainWrapperDiv>
	);
};
export default Login;
