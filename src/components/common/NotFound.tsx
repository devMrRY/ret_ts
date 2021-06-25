import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
    <div className="not-found">
        <div
            style={{
                textAlign: "center",
                paddingTop: 5,
                paddingBottom: 5
            }}
        >
            <div className="top-icon">
                <img src="/assets/images/404.png" alt="alt-img" />
            </div>
            <div className="oops">
                <h2 className="oops-title">
                    Ooops! Page not found
                </h2>
                <b>Unfortunately, This document is not available !</b>
                <p className="oops-details">
                    The page you are looking for might have moved, been renamed or perhaps never existed.
                </p>
                <Link to="/">Back Home</Link>
            </div>
        </div>
    </div>
)

export default NotFound;