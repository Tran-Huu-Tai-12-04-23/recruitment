import { useDeviceType } from '../hooks';

type HomeProps = {
    children?: React.ReactNode;
};
function Home(props: HomeProps) {
    const useDevice = useDeviceType();
    return (
        <div>
            {useDevice}
            {'hello'}
            {props.children}
        </div>
    );
}

export default Home;
