import ReCAPTCHA from 'react-google-recaptcha';
import { Button, Checkbox, Form, FormProps, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import ArrowIcon from '../../../assets/icon/arrow';

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
    function onChange(value: any) {
        console.log('Captcha value:', value);
    }
    return (
        <>
            <h1 className="text-primary text-[36px] font-roboto">Đăng nhập</h1>
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
                        <div>
                            Role <span className="text-red-500">*</span>
                        </div>
                    }
                    name="role"
                    rules={[{ required: true, message: '' }]}
                >
                    <Select
                        size="large"
                        style={{ width: '100%' }}
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
                        <div>
                            Email <span className="text-red-500">*</span>
                        </div>
                    }
                    name="email"
                    rules={[{ required: true, message: '' }]}
                >
                    <Input size="large" />
                </Form.Item>

                <Form.Item<FieldType>
                    label={
                        <div>
                            Mật khẩu <span className="text-red-500">*</span>
                        </div>
                    }
                    required={false}
                    name="password"
                    rules={[{ required: true, message: '' }]}
                >
                    <Input.Password size="large" />
                </Form.Item>

                <Form.Item<FieldType> name="isRemember" valuePropName="checked" className="w-full">
                    <div className="flex justify-between items-center w-full">
                        <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                        <Link
                            to={window.origin + '/auth/forgot-password'}
                            className="text-primary underline hover:text-primary hover:underline"
                        >
                            Quên mật khẩu?
                        </Link>
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
