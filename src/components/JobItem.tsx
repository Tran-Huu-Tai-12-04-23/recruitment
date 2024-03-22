import { Button, Image, Flex, Typography, Layout, Grid, Col, Row, Card } from 'antd';
import DownloadIcon from '../assets/icon/download';
import EmailIcon from '../assets/icon/email';
import PhoneIcon from '../assets/icon/phone';

function JobItem() {
    return (
        <Card
            hoverable
            style={{
                scale: '95%',
            }}
        >
            <Flex justify="space-between">
                <Flex align="center">
                    <Image
                        preview={false}
                        width={35}
                        src="https://firebasestorage.googleapis.com/v0/b/appmapdemo-b2a39.appspot.com/o/image-removebg-preview%20(1).png?alt=media&token=aaa0e94e-03d1-402c-926a-1e33cd7ac82e"
                    />
                    <Layout className="ml-2 bg-transparent">
                        <Typography className="font-bold text-md"> Thiết kế UI/UX (Figma)</Typography>
                        <Typography className="text-second"> Alta Software</Typography>
                    </Layout>
                </Flex>

                <Button
                    icon={<DownloadIcon />}
                    type="primary"
                    className="w-[10rem] flex justify-center items-center"
                    size="large"
                    htmlType="submit"
                />
            </Flex>

            <Typography className=" mt-4 mb-4 text-[14px] w-2/3">
                Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript
            </Typography>
            <Layout className="border-b-[1px] border-dashed border-second w-full bg-transparent"></Layout>

            <Row className="text-[#6D6D6D] mt-2">
                <Flex align="center" gap={4} className="p-2 pr-4 border-r-[1px] border-second border-solid">
                    <EmailIcon />
                    <Typography>tuyendung@alta.com.vn</Typography>
                </Flex>
                <Layout className="bg-red-500 w-[2px] h-full "></Layout>
                <Flex align="center" gap={4} className="p-2">
                    <PhoneIcon />
                    <Typography>0282 240 9960</Typography>
                </Flex>
            </Row>
        </Card>
    );
}

export default JobItem;
