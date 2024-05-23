import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box p={5} display="flex" justifyContent="space-between">
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/dashboard">
        Dashboard
      </Button>
    </Box>
  );
}

export default Navigation;
