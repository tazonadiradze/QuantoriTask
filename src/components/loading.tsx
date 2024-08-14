import React from "react";
import { Spin } from "antd";

interface LoadingProps {
  tip?: string;
}

const Loading: React.FC<LoadingProps> = ({ tip = "Loading..." }) => {
  return (
    <div>
      <Spin tip={tip} />
    </div>
  );
};

export default Loading;
