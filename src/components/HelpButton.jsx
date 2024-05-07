import { Link } from "react-router-dom";

const HelpButton = () => {
  return <div>
    <button>
      <Link to="/ToolTipModal">Help</Link>
    </button>
  </div>;
};

export default HelpButton;
