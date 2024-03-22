import { Outlet, RouterProvider } from 'react-router-dom';
import { CompanyIcon1, CompanyIcon2, CompanyIcon3, CompanyIcon4, CompanyIcon5 } from '../../assets/icon/company';
import ThumbnailLogin from '../../assets/icon/thumbnailLogin';
import { Button } from 'antd';
import PersonIcon from '../../assets/icon/person';
import RegisterIcon from '../../assets/icon/register';
import { usePathname, useRouter } from '../../routes/hooks';

enum Roles {
    RECRUITMENT,
    STUDENT,
}
function HeaderDesktop() {
    let role = Roles.RECRUITMENT;
    const pathname = usePathname();
    const router = useRouter();
    console.log(pathname);

    const navigate = [
        {
            name: 'Xem JD yêu cầu tuyển dụng',
            id: 0,
            path: '/',
            icon: <PersonIcon color="inherit" />,
        },
        {
            name: 'Đăng ký trực tuyến',
            id: 1,
            path: '/student/register-online',
            icon: <RegisterIcon color="inherit" />,
        },
    ];
    return (
        <div className="h-header fixed right-0 left-0 top-0 bg-white p-2 z-[10000000] ">
            <div className="max-w-screen-xl w-full m-auto h-full">
                <div className="w-full h-full flex justify-between items-center ">
                    <div className="flex justify-center items-center gap-2 ">
                        <CompanyIcon1 />
                        <CompanyIcon2 />
                        <CompanyIcon3 />
                        <CompanyIcon4 />
                        <CompanyIcon5 />
                    </div>
                    {/* {role === Roles.RECRUITMENT && (
                        <div className="flex justify-end items-center gap-4">
                            <div className="hover:text-primary text-primary  cursor-pointer relative flex justify-center items-center gap-2 text-md">
                                <PersonIcon color="inherit" />
                                <h6 className="text-[20px] font-medium">Xem JD yêu cầu tuyển dụng</h6>
                                <div className="h-2 w-2 rounded-full bg-btn-primary absolute -bottom-2 right-1/2 translate-x-1/2"></div>
                            </div>
                            <div className="hover:text-primary text-[#6D6D6D] cursor-pointer relative flex justify-center items-center gap-2 text-md">
                                <RegisterIcon color="inherit" />
                                <h6 className="text-[20px] font-medium">Đăng ký trực tuyến</h6>
                                <div className="h-2 w-2 rounded-full absolute -bottom-2 right-1/2 translate-x-1/2"></div>
                            </div>
                        </div>
                    )} */}
                    {role === Roles.RECRUITMENT && (
                        <div className="flex justify-end items-center gap-4">
                            {navigate.map((item, index) => (
                                <div
                                    onClick={() => {
                                        router.push(item.path);
                                    }}
                                    key={index}
                                    className={` ${
                                        pathname === item.path && 'text-primary'
                                    } hover:text-primary   cursor-pointer relative flex justify-center items-center gap-2 text-md`}
                                >
                                    {item.icon}
                                    <h6 className="text-[20px] font-medium">{item.name}</h6>
                                    <div
                                        className={`h-2 w-2 rounded-full ${
                                            pathname === item.path && 'bg-btn-primary'
                                        } absolute -bottom-2 right-1/2 translate-x-1/2`}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeaderDesktop;
