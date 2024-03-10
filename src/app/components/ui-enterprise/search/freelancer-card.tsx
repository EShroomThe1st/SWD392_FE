import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Rate,
  Row,
  Space,
  Tag,
  Tooltip,
} from "antd";
import { formatCurrency } from "../../../utils/utils";
import {
  EnvironmentOutlined,
  EyeOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FreelancerDetail } from "../../../models/user";

export default function FreelancerCard({
  freelancer,
}: {
  freelancer: FreelancerDetail;
}) {
  const {
    firstName,
    middleName,
    lastName,
    nation,
    jobRole,
    description,
    skills,
    ratingCount,
    averageRating,
    projectCount,
    desireSalary,
    language,
  } = freelancer;

  const fullName = `${firstName} ${middleName ? middleName + " " : ""}${lastName}`;

  return (
    <Card
      bordered={true}
      title={fullName}
      className="overflow-auto"
      extra={
        <Tooltip title="Xem chi tiết">
          <Link to={`${freelancer.id}`}>
            <Button icon={<EyeOutlined />} className="ml-auto">
              Chi tiết
            </Button>
          </Link>
        </Tooltip>
      }
    >
      <Flex justify="space-between">
        <Space direction="vertical" size="middle" className="flex">
          <div className="flex gap-5">
            <Avatar size={"large"} icon={<UserOutlined />} />

            <Row>
              <Col>
                <Space className="whitespace-nowrap">
                  <EnvironmentOutlined />
                  {nation.label}
                </Space>
                <div className="whitespace-nowrap text-[1.3rem] font-bold">
                  {jobRole}
                </div>
              </Col>
            </Row>
          </div>

          <div className="w-72">{description}</div>
          <div className="flex items-center gap-5">
            <div className="whitespace-nowrap">
              <span className="font-bold">Kỹ năng: </span>
            </div>
            <Space size={[0, 8]} wrap>
              {skills.map((skillItem, index) => (
                <Tag key={index} color="#87d068">
                  {skillItem.label}
                </Tag>
              ))}
            </Space>
          </div>
          <Row className="items-center">
            <Space>
              Đánh giá:
              <Rate
                disabled
                defaultValue={averageRating}
                character={<StarFilled style={{ fontSize: "15px" }} />}
                allowHalf
              />
              {`(${ratingCount} đánh giá)`}
            </Space>
            <Divider type="vertical" />
            <span>Dự án: {projectCount}</span>
            <Divider type="vertical" />
            <span>Chi phí/giờ: {formatCurrency(desireSalary)}</span>
            <Divider type="vertical" />
            <span>Ngôn ngữ: {language.length}</span>
          </Row>
        </Space>
      </Flex>
    </Card>
  );
}
