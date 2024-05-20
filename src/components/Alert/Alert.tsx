import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { alertTypes } from "../../interfaces";

interface iProps {
  title: string;
  description?: string;
  children?: ReactNode;
  // styles and icons
  type: alertTypes;
  icon: ReactNode;
}

const Alert = ({ title, type, icon, description, children }: iProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4 className="title">{title}</h4>
        </div>
        <X className="close" size={20} />
      </div>
      <p className="alert-text">{children ? children : description} </p>
    </div>
  );
};

export default Alert;
