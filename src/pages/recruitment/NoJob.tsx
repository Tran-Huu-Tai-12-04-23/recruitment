import { Typography, Layout, Flex } from 'antd';
import NoJobIcon from '../../assets/icon/company/nojob';

function NoJob() {
    return (
        <Flex className="w-full" justify="center" align="center" vertical gap={40}>
            <Typography className=" w-[490px] text-center text-[#6D6D6D] mt-5">
                Khi bạn đang tìm kiếm một công việc, có một số điều bạn có thể làm để tận dụng tối đa tìm kiếm của bạn
            </Typography>
            <NoJobIcon />
        </Flex>
    );
}

export default NoJob;
