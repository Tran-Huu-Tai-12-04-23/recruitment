import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Typography, Checkbox, Form, FormProps, Input, Select, Layout, Flex } from 'antd';
import ArrowIcon from '../../../assets/icon/arrow';
import { path } from '../../../routes/path';
import { useRouter } from '../../../routes/hooks';
import { useForm } from 'antd/es/form/Form';
import SendIcon from '../../../assets/icon/send';

type FieldType = {
    email?: string;
    nameEnterprise?: string;
    phoneNumber?: string;
    addressCompany?: string;
    manager?: string;
    managerPhone?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function RecruitmentRegisterPage() {
    const [form] = useForm();
    const router = useRouter();
    function onChange(value: any) {
        console.log('Captcha value:', value);
    }
    return (
        <Layout className="pt-[144px] h-screen">
            <Typography className="text-primary text-[36px] font-[700] font-roboto mb-4">
                Điền thông tin đăng ký
            </Typography>
            <Flex className="w-full " gap={100}>
                <Form
                    form={form}
                    className="w-1/2"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout={'vertical'}
                >
                    <Form.Item<FieldType>
                        required={false}
                        label={
                            <Typography className="font-[700]">
                                Email liên hệ <span className="text-red-500">*</span>
                            </Typography>
                        }
                        name="email"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input
                            className="bg-white p-4 placeholder:text-second"
                            variant="borderless"
                            placeholder="Nhập email"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        required={false}
                        label={
                            <Typography className="font-[700]">
                                Tên doanh nghiệp <span className="text-red-500">*</span>
                            </Typography>
                        }
                        name="nameEnterprise"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input
                            className="bg-white p-4 placeholder:text-second"
                            variant="borderless"
                            size="large"
                            placeholder="Nhập họ và tên"
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        required={false}
                        label={
                            <Typography className="font-[700]">
                                Điện thoại công ty <span className="text-red-500">*</span>
                            </Typography>
                        }
                        name="phoneNumber"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input
                            className="bg-white p-4 placeholder:text-second"
                            variant="borderless"
                            size="large"
                            placeholder="Nhập số điện thoại"
                        />
                    </Form.Item>
                </Form>
                <Form
                    form={form}
                    className="w-1/2"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout={'vertical'}
                >
                    <Form.Item<FieldType>
                        required={false}
                        label={
                            <Typography className="font-[700]">
                                Địa chỉ công ty <span className="text-red-500">*</span>
                            </Typography>
                        }
                        name="addressCompany"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input
                            className="bg-white p-4 placeholder:text-second"
                            variant="borderless"
                            placeholder="Nhập trường đang học"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        required={false}
                        label={
                            <Typography className="font-[700]">
                                Người quản lý <span className="text-red-500">*</span>
                            </Typography>
                        }
                        name="nameEnterprise"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input
                            className="bg-white p-4 placeholder:text-second"
                            variant="borderless"
                            size="large"
                            placeholder="Nhập chuyên ngành"
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        required={false}
                        label={<Typography className="font-[700]">Điện thoại người quản lý</Typography>}
                        name="phoneNumber"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input
                            className="bg-white p-4 placeholder:text-second"
                            variant="borderless"
                            size="large"
                            placeholder="Nhập số điện thoại quản lý"
                        />
                    </Form.Item>
                </Form>
            </Flex>
            <Form
                form={form}
                className="w-1/2"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout={'vertical'}
            >
                <Form.Item className="w-full">
                    <Button
                        type="primary"
                        className="w-fit flex justify-center items-center gap-2 pl-8 pr-8"
                        size="large"
                        htmlType="submit"
                    >
                        <Typography className="font-extrabold text-white">Gửi</Typography>
                        <SendIcon />
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
}

export default RecruitmentRegisterPage;
