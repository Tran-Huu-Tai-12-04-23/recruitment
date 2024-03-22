import ReCAPTCHA from 'react-google-recaptcha';
import { CompanyIcon1, CompanyIcon2, CompanyIcon3, CompanyIcon4, CompanyIcon5 } from '../assets/icon/company';
import ThumbnailLogin from '../assets/icon/thumbnailLogin';
import React from 'react';
import { Outlet } from 'react-router-dom';

type AuthLayoutProps = {
    children?: React.ReactNode;
};
function AuthLayout(props: AuthLayoutProps) {
    return (
        <div className="w-screen flex justify-center pt-10">
            <div className="max-w-screen-xl w-full ">
                <div className="grid grid-cols-2 ">
                    <div className="flex justify-start items-center gap-2 ">
                        <CompanyIcon1 />
                        <CompanyIcon2 />
                        <CompanyIcon3 />
                        <CompanyIcon4 />
                        <CompanyIcon5 />
                    </div>
                    <h1 className="uppercase font-bold text-[28px] ml-24 text-primary">
                        HỆ THỐNG TUYỂN DỤNG <br />
                        VÀ QUẢN LÝ SINH VIÊN THỰC TẬP
                    </h1>
                </div>
                <div className="grid grid-cols-2 gap-24 h-full m-auto min-h-[60vh]">
                    <div className="flex flex-col pt-10 justify-center h-full">
                        {props.children}
                        <Outlet />
                    </div>
                    <div className="flex flex-col justify-center h-full items-start">
                        <ThumbnailLogin />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
