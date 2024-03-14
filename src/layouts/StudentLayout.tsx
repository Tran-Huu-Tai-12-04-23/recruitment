import { Link, Outlet } from 'react-router-dom';

export default function StudentLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li></li>
                    <li>
                        <Link to="/dashboard/messages">Messages</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}
