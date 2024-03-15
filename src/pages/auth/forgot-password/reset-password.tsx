import { Button, FormProps, Input, Form, Modal } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter } from '../../../routes/hooks';
import { useState } from 'react';

type FieldType = {
    password?: string;
    confirmPassword?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const { confirm } = Modal;

function ResetPassword() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal title="" open={isModalOpen} centered footer={<></>} onCancel={handleCancel} >
                <div className="flex flex-col justify-center items-center p-10">
                    <h1 className="text-primary text-[24px] font-roboto">Tạo mật khẩu thành công</h1>
                    <h5 className="h-fit p-0 m-0 text-[16px] line-[20.8px] font-[400] mb-6 text-center">
                        Đăng nhập ngay để bắt đầu <br />
                        nhận được các cơ hội sự nghiệp lý tưởng
                    </h5>

                    <Button onClick={() => router.replace('/auth/login')} type="primary" size="large" htmlType="submit">
                        Dăng nhập ngay
                    </Button>
                </div>
            </Modal>
            <h1 className="text-primary text-[36px] font-roboto">Tạo lại mật khẩu</h1>
            <Form name="" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" layout={'vertical'}>
                <Form.Item<FieldType>
                    label={<div>Mật khẩu</div>}
                    required={false}
                    name="password"
                    rules={[{ required: true, message: '' }]}
                >
                    <Input.Password size="large" />
                </Form.Item>
                <Form.Item<FieldType>
                    label={<div>Mật khẩu</div>}
                    required={false}
                    name="confirmPassword"
                    rules={[{ required: true, message: '' }]}
                >
                    <Input.Password size="large" />
                </Form.Item>
                <Form.Item className="w-full">
                    <Button onClick={showModal} type="primary" className="w-full" size="large" htmlType="submit">
                        Xác nhận
                    </Button>
                </Form.Item>
                <h5
                    onClick={() => router.replace('/auth/login')}
                    className="cursor-pointer float-right p-0 m-0 mt-2 font-[400] text-[16px] text-primary underline hover:text-primary hover:underline"
                >
                    Quay lại đăng nhập
                </h5>
            </Form>
        </>
    );
}

export default ResetPassword;
