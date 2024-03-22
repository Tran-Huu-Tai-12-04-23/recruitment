import { Outlet } from 'react-router-dom';
import { Footer, HeaderDesktop } from '../components';

export default function MainLayout() {
    return (
        <div className="min-h-screen w-full  ">
            <HeaderDesktop />
            <div className="bg-second w-full m-auto">
                <div className="max-w-screen-xl w-full m-auto">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
}
