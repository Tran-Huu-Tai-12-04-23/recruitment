import { Link, Outlet } from 'react-router-dom';

export default function RecruitmentLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li></li>
                    <li>
                        <Link to="/dashboard/messages">Recurment layout</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}
