import React from "react";

export const SignIn = () => {
    return (
        <div className="loginWraaper">
            <div className="head-title-wrap">
                <h3 className="head-title">
                    회원가입
                    <p>아이디와 이메일로 간편하게 시작하세요!</p>
                </h3>
            </div>
            <div id="regForm">
                <div className="login__id">
                    <label className="datainput-long layout__flex-left">
                        <input
                            id="userId"
                            name="userId"
                            className="in-icon-close"
                            required={true}
                            type="text"
                            placeholder="아이디"
                        />
                        <button
                            type="button"
                            className="layout__flex-lastright icon-close"
                        ></button>
                    </label>
                    <p className="input-info" id="userIdMsg">
                        영문 또는 영문, 숫자 조합 6~12 자리
                    </p>
                </div>

                <div className="login__password">
                    <label className="datainput-long layout__flex-left">
                        <input
                            id="password"
                            className="in-icon-close"
                            required={true}
                            type="password"
                            placeholder="비밀번호"
                        />

                        <button
                            type="button"
                            className="layout__flex-lastright icon-hide"
                        ></button>
                        <button
                            type="button"
                            className="layout__flex-lastright icon-close"
                        ></button>
                    </label>
                    <p className="input-info" id="passwordMsg">
                        영문, 숫자, 특수문자(~!@#$%^&amp;*) 조합 8~15 자리
                    </p>
                </div>

                <div className="login__password">
                    <label className="datainput-long layout__flex-left">
                        <input
                            id="passwordConfirm"
                            className="in-icon-close"
                            required={true}
                            type="password"
                            placeholder="비밀번호 확인"
                        />

                        <button
                            type="button"
                            className="layout__flex-lastright icon-hide"
                        ></button>
                        <button
                            type="button"
                            className="layout__flex-lastright icon-close"
                        ></button>
                    </label>
                    <p className="input-info red" id="passwordConfirmMsg"></p>
                </div>

                <div className="login__email">
                    <label className="datainput-long layout__flex-left">
                        <input
                            id="email"
                            className="in-icon-close"
                            type="text"
                            required={true}
                            placeholder="이메일"
                        />
                        <button
                            type="button"
                            className="layout__flex-lastright icon-close"
                        ></button>
                    </label>
                    <p className="input-info red" id="emailMsg"></p>
                </div>
                <div>
                    <div className="buttonWrapper">
                        <button>가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};