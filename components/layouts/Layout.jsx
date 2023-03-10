import Head from "next/head";
import { Box } from "@mui/material";
import { Sidebar, Navbar } from "../ui";

export const Layout = ({ title='OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  );
};