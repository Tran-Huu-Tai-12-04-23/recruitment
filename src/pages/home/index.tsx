import { useDeviceType } from '../../hooks';
import FilterBar from './FilterBar';

type HomeProps = {
    children?: React.ReactNode;
};
function Home(props: HomeProps) {
    const useDevice = useDeviceType();
    return (
        <div
            className="pt-header "
            style={{
                height: 'calc(100vh - 72px )',
            }}
        >
            <FilterBar />

            <div className="w-full flex justify-center items-center mt-10">
                <h5 className="font-semibold m-auto text-4xl text-center">
                    Tìm<span className="text-primary"> công việc mơ ước </span>của bạn <br />
                    tại ngôi nhà mới
                </h5>
            </div>
        </div>
    );
}

export default Home;
