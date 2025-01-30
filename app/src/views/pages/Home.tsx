import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Paper,
  styled,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import { setTitle } from '../../DOM';
import { useAlert } from '../alert/AlertContext';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/slices/user';
import GetUserdataRoute from './route_controller/GetUserdataRoute';

// Buat tema kustom
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Warna biru modern
    },
    secondary: {
      main: '#dc004e', // Warna aksen merah muda
    },
    background: {
      default: '#f4f6f8', // Warna latar belakang
    },
  },
});

// Styled component untuk sidebar
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

// Styled component untuk konten utama
const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { showQuestion } = useAlert();
  const dispatch = useDispatch();

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index); // Update state saat item diklik
  };
  const handleLogout = async () => {
    showQuestion("Logout", "Anda yakin ingin keluar?", () => {
      dispatch(userLogout());
    })
  }

  const drawerItems = [
    {
      name: "Home",
      onClick: (index: number) => {
        handleListItemClick(index);
      },
      icon: <HomeIcon color='inherit' />
    },
    {
      name: "Wallet",
      onClick: (index: number) => {
        handleListItemClick(index);
      },
      icon: <AccountBalanceWalletIcon color='inherit' />
    },
    {
      name: "Logout",
      onClick: (_: number) => {
        handleLogout();
      },
      icon: <LogoutIcon color='inherit' />
    },
  ]


  useEffect(() => {
    setTitle("KeuanganKu")
  }, [])

  return (
    <GetUserdataRoute>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <StyledDrawer variant="permanent">
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
              <List>
                {drawerItems.map((menuItem, index) => (
                  <ListItemButton
                    key={index}
                    selected={selectedIndex === index}
                    onClick={() => {
                      menuItem.onClick(index);
                    }}
                    sx={{
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)'
                        }
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {menuItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={menuItem.name} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </StyledDrawer>

          <MainContent>
            <Typography variant="h4" gutterBottom>
              Selamat Datang di Halaman Beranda
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {/* Kartu 1 */}
              <Box sx={{ flexBasis: '100%', sm: '48%', md: '32%' }}>
                <Paper sx={{ p: 2, '&:hover': { boxShadow: 6 } }}>
                  <Typography variant="h6">Kartu 1</Typography>
                  <Typography variant="body1">
                    Ini adalah contoh kartu dengan efek hover.
                  </Typography>
                </Paper>
              </Box>

              {/* Kartu 2 */}
              <Box sx={{ flexBasis: '100%', sm: '48%', md: '32%' }}>
                <Paper sx={{ p: 2, '&:hover': { boxShadow: 6 } }}>
                  <Typography variant="h6">Kartu 2</Typography>
                  <Typography variant="body1">
                    Kartu ini juga memiliki efek hover yang modern.
                  </Typography>
                </Paper>
              </Box>

              {/* Kartu 3 */}
              <Box sx={{ flexBasis: '100%', sm: '48%', md: '32%' }}>
                <Paper sx={{ p: 2, '&:hover': { boxShadow: 6 } }}>
                  <Typography variant="h6">Kartu 3</Typography>
                  <Typography variant="body1">
                    Tambahkan lebih banyak konten di sini.
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </MainContent>
        </Box>
      </ThemeProvider>
    </GetUserdataRoute>
  );
}

export default HomePage;