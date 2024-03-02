import { EditTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { ButtonProps } from "antd/es/button/button";

export function PrimaryButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button type="primary" {...props} className="bg-[#00b96b]">
      {children}
    </Button>
  );
}

export function OutlineButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button type="default" {...props}>
      {children}
    </Button>
  );
}

interface IconButtonProps extends Omit<ButtonProps, "icon"> {
  icon: React.ReactNode;
}
export function IconButton(props: IconButtonProps) {
  const { icon, children } = props;
  return (
    <Button type="text" {...props} size="large" icon={icon}>
      {children}
    </Button>
  );
}

export function EditButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button
      type="text"
      icon={<EditTwoTone twoToneColor="#74BA7B" />}
      {...props}
    >
      {children}
    </Button>
  );
}
