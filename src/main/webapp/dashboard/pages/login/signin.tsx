import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import { join } from "../api/login";
import { useRouter } from "next/router";

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

export const SignInWrapper = (props: Iprops) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const router = useRouter();
	const joinApi = useCallback(() => {
		console.log(emailRef.current?.value);
		if (!emailRef.current) {
			return false;
		} else if (!passwordRef.current) {
			return false;
		} else {
			join(
				{
					email: emailRef.current?.value,
					password: passwordRef.current?.value,
				},
				(arg) => {
					router.push("/login/login");
				},
			);
		}
	}, []);

	return (
		<Main>
			<LoginWrapperDiv>
				<div className="head-title-wrap">
					<h3 className="head-title">
						회원가입
						<p>아이디와 이메일로 간편하게 시작하세요!</p>
					</h3>
				</div>
				<div id="regForm">
					<div className="login__email">
						<label className="datainput-long layout__flex-left">
							<InputDiv
								id="email"
								className="in-icon-close"
								type="text"
								required={true}
								placeholder="이메일"
								ref={emailRef}
							/>
						</label>
						<p className="input-info red" id="emailMsg"></p>
					</div>

					<div className="login__password">
						<label className="datainput-long layout__flex-left">
							<InputDiv
								id="password"
								type="password"
								className="in-icon-close"
								required={true}
								placeholder="비밀번호"
								ref={passwordRef}
							/>
						</label>
						<FontSize className="input-info" id="passwordMsg">
							영문, 숫자, 특수문자(~!@#$%^&amp;*) 조합 8~15 자리
						</FontSize>
					</div>

					<div className="login__password">
						<label className="datainput-long layout__flex-left">
							<InputDiv
								type="password"
								id="passwordConfirm"
								className="in-icon-close"
								required={true}
								placeholder="비밀번호 확인"
							/>
						</label>
						<FontSize
							className="input-info red"
							id="passwordConfirmMsg"
						></FontSize>
					</div>

					<div>
						<div className="buttonWrapper">
							<ButtonTypeOne onClick={joinApi}>가입하기</ButtonTypeOne>
						</div>
					</div>
				</div>
			</LoginWrapperDiv>
		</Main>
	);
};

const SignIn: React.FC = () => {
	const [page, setPage] = useState("login");

	const pageChange = (page: string): void => {
		setPage(page);
	};

	return (
		<MainWrapperDiv>
			<SignInWrapper pageChange={pageChange} />
		</MainWrapperDiv>
	);
};
export default SignIn;
