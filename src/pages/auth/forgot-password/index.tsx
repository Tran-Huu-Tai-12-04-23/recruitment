import { Button, Form, FormProps, Input } from 'antd';
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

function ForgotPassword() {
    const router = useRouter();

    return (
        <>
            <h1 className="h-fit p-0 m-0 text-primary text-[36px] font-roboto">Quên mật khẩu</h1>
            <h5 className=" h-fit p-0 m-0 text-[16px] line-[20.8px] font-[400] mb-10 mt-2">
                Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu
                <br /> khôi phục lại mật khẩu
            </h5>
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
                            Email <span className="text-red-500">*</span>
                        </div>
                    }
                    name="email"
                    rules={[{ required: true, message: '' }]}
                >
                    <Input size="large" placeholder="Nhập email của bạn..." />
                </Form.Item>

                <Form.Item className="w-full p-0 m-0">
                    <Button
                        onClick={() => router.replace('/auth/reset-password')}
                        type="primary"
                        className="w-full"
                        size="large"
                        htmlType="submit"
                    >
                        Xác nhận
                    </Button>
                </Form.Item>

                <h5
                    onClick={() => router.back()}
                    className="cursor-pointer float-right p-0 m-0 mt-2 font-[400] text-[16px] text-primary underline hover:text-primary hover:underline"
                >
                    Quay lại đăng nhập
                </h5>
            </Form>
        </>
    );
}

export default ForgotPassword;
