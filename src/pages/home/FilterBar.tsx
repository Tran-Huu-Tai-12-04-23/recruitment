import { Button, Flex, Form, FormProps, Input, Select } from 'antd';
import SearchIcon from '../../assets/icon/search';
import ArrowIcon from '../../assets/icon/arrow';
import { useForm } from 'antd/es/form/Form';
type FieldType = {
    searchKey?: string;
    major?: string;
    company?: string;
};

function FilterBar() {
    const [form] = useForm();
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form form={form} layout="inline" className="w-full" onChange={() => console.log(form.getFieldsValue())}>
            <Flex
                gap="middle"
                justify="space-between"
                align="center"
                className="mt-10 p-2 pl-4 pr-4 rounded-lg bg-white w-full"
            >
                <Flex justify="start" align="center">
                    <Form.Item name="searchKey">
                        <Input
                            variant="borderless"
                            addonBefore={<SearchIcon className="text-primary" />}
                            placeholder="Nhập vị trí muốn ứng tuyển"
                        />
                    </Form.Item>
                </Flex>
                <div className="h-10 w-[1px] bg-gray-500/20"></div>
                <Form.Item name="major">
                    <Select
                        size="large"
                        style={{ width: '20rem' }}
                        variant="borderless"
                        placeholder="Chọn lĩnh vực chuyên môn"
                        options={[
                            { value: 'Recruitment', label: 'Recruitment' },
                            { value: 'Student', label: 'Student' },
                        ]}
                        suffixIcon={<ArrowIcon className="text-primary" />}
                    />
                </Form.Item>
                <div className="h-10 w-[1px] bg-gray-500/20"></div>
                <Form.Item name="company">
                    <Select
                        size="large"
                        style={{ width: '20rem' }}
                        variant="borderless"
                        placeholder="Chọn công ty"
                        options={[
                            { value: 'Recruitment', label: 'Recruitment' },
                            { value: 'Student', label: 'Student' },
                        ]}
                        suffixIcon={<ArrowIcon className="text-primary" />}
                    />
                </Form.Item>
                <Button
                    icon={<SearchIcon className="text-white" color="white" />}
                    type="primary"
                    className="w-[10rem] flex justify-center items-center"
                    size="large"
                    htmlType="submit"
                >
                    Tìm việc
                </Button>
            </Flex>
        </Form>
    );
}

export default FilterBar;
