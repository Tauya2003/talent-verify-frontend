import { useLocation, Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

function DynamicBreadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  console.log(location.pathname);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return index === pathSegments.length - 1 ? (
      <Typography key={href} color="text.primary">
        {segment}
      </Typography>
    ) : (
      <Link key={href} color="inherit" to={href}>
        {segment}
      </Link>
    );
  });

  return <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>;
}

export default DynamicBreadcrumbs;
