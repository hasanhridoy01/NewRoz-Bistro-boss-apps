import { Stack, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

const Cover = ({ image, title, body }) => {
  const isSmall = useMediaQuery("(max-width: 800px)");

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isSmall ? (
        <div
          style={{
            height: "300px",
            width: "400px",
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack direction={"column"} spacing={1}>
            {" "}
            <Typography
              variant="h3"
              sx={{ color: "#fff", textAlign: "center" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", textAlign: "center", width: '300px' }}
            >
              {body}
            </Typography>
          </Stack>
        </div>
      ) : (
        <div
          style={{
            height: "300px",
            width: "700px",
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack direction={"column"} spacing={1}>
            {" "}
            <Typography
              variant="h3"
              sx={{ color: "#fff", textAlign: "center" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", textAlign: "center" }}
            >
              {body}
            </Typography>
          </Stack>
        </div>
      )}
    </div>
  );
};

// Set propTypes for the Cover component
Cover.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Cover;
