import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Typography, Checkbox, Form, FormProps, Input, Select, Flex } from 'antd';
import ArrowIcon from '../../../assets/icon/arrow';
import { path } from '../../../routes/path';
import { useRouter } from '../../../routes/hooks';

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
    role?: string;
    isRemember?: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login() {
    const router = useRouter();
    function onChange(value: any) {
        console.log('Captcha value:', value);
    }
    return (
        <>
            <Typography className="text-primary font-[700] text-[36px] font-roboto">Đăng nhập</Typography>
            <Form
                name=""
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
                            Role <span className="text-red-500">*</span>
                        </Typography>
                    }
                    name="role"
                    rules={[{ required: true, message: '' }]}
                >
                    <Select
                        className="bg-white rounded-lg placeholder:text-second"
                        variant="borderless"
                        size="large"
                        popupClassName="mt-10"
                        style={{ width: '100%', height: '56px' }}
                        options={[
                            { value: 'Recruitment', label: 'Recruitment' },
                            { value: 'Student', label: 'Student' },
                        ]}
                        suffixIcon={<ArrowIcon className="text-primary" />}
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    required={false}
                    label={
                        <Flex className="font-[700]">
                            Email <span className="text-red-500">*</span>
                        </Flex>
                    }
                    name="email"
                    rules={[{ required: true, message: '' }]}
                >
                    <Input className="bg-white p-4 placeholder:text-second" variant="borderless" size="large" />
                </Form.Item>

                <Form.Item<FieldType>
                    label={
                        <Flex className="font-[700]">
                            Mật khẩu <span className="text-red-500">*</span>
                        </Flex>
                    }
                    required={false}
                    name="password"
                    rules={[{ required: true, message: '' }]}
                >
                    <Input.Password
                        className="bg-white p-4 placeholder:text-second"
                        variant="borderless"
                        size="large"
                    />
                </Form.Item>

                <Form.Item<FieldType> name="isRemember" valuePropName="checked" className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                        <Typography
                            onClick={() => router.push(path.forgotPassword)}
                            className="text-primary underline hover:text-primary hover:underline"
                        >
                            Quên mật khẩu?
                        </Typography>
                    </div>
                </Form.Item>
                <ReCAPTCHA className="mb-5" onChange={onChange} sitekey={'6Lc9hJkpAAAAAOq_Wg7DXHLNpCHLy0eTAEYTfuIR'} />

                <Form.Item className="w-full">
                    <Button type="primary" className="w-full" size="large" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Login;
