import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Heading = function () {
  return (
    <Box sx={{display:'flex', justifyContent:'center'}}>
      <Typography variant="h6" gutterBottom>
        Hey I`m Heading component & working fine !!!
      </Typography>
    </Box>
  );
};

export default Heading;
