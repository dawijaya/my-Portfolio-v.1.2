"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";

const drawerWidth = 240;
const navItems = [
  { label: "Halaman Utama", id: "home" },
  { label: "Tentang Saya", id: "tentang-saya" },
  { label: "Sertifikasi", id: "sertifikasi" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Kontak", id: "kontak" },
  { label: "CV", id: "cv" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  // Menyembunyikan navbar pada rute tertentu
  if (
    pathname === "/" ||
    pathname === "/Pilih-Bahasa" ||
    pathname === "/Indonesia/Deskripsi"
  ) {
    return null;
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false); // Tutup drawer setelah item diklik
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        className="font-sans  font-extrabold"
        variant="h6"
        sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            className="border-b border-slate-500 border-opacity-15"
            key={item.id}
            disablePadding>
            <ListItemButton
              className="rounded-lg hover:font-extrabold"
              onClick={() => handleClick(item.id)}
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#003366",
                  color: "white",
                },
              }}>
              <ListItemText
                className="font-sans  font-semibold"
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <div className="absolute top-[30rem] left-4">
          <p className="font-semibold text-xs">
            Copyright©<span className="text-primary">DandiAgusWijaya</span>2024
          </p>
          <p className="text-xs">Versi 1.2</p>
        </div>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#87CEEB" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <div className="font-sans md:hidden font-bold">Menu</div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Menu
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleClick(item.id)}
                sx={{
                  color: "#FFFFFF",
                  "&:hover": { backgroundColor: "red", fontWeight: "bold" },
                }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#87CEEB",
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
