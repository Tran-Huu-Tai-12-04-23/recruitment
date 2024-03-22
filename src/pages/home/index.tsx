import { Flex, Layout, Pagination, Typography } from 'antd';
import { JobItem } from '../../components';
import { useDeviceType } from '../../hooks';
import FilterBar from './FilterBar';

type HomeProps = {
    children?: React.ReactNode;
};
function Home(props: HomeProps) {
    const useDevice = useDeviceType();
    return (
        <div className="pt-header pb-[144px]">
            <FilterBar />

            <Flex justify="center" align="center" className="w-full mt-10">
                <Typography className="font-semibold m-auto text-4xl text-center">
                    Tìm<span className="text-primary text-4xl"> công việc mơ ước </span>của bạn <br />
                    tại ngôi nhà mới
                </Typography>
            </Flex>

            <Flex wrap="wrap" align="start" justify="start" className="mt-5 ">
                {[1, 2, 3, 4, 5, 6, 6, 7].map((it, index) => (
                    <JobItem key={index} />
                ))}
            </Flex>

            <Layout className="flex justify-center items-center mt-4">
                <Pagination defaultCurrent={1} total={50} />
            </Layout>
        </div>
    );
}

export default Home;
