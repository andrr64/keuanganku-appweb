import { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Box, Link, InputAdornment, IconButton } from '@mui/material';
import {userLogin} from '../../controllers/user';
import LoadingModal from '../modals/LoadingModal';
import { wait } from '../../util/time';
import { useAlert } from '../alert/AlertContext';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/user';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { setTitle } from '../../DOM';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const {showAlert} = useAlert();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setTitle("KeuanganKu - Login");
    }, [])
    // Menghandle submit form
    const handleSubmit = async (e: any) => {
        e.preventDefault();  
        setLoading(true);
        const controllerResponse = await userLogin(username, password);
        await wait(500);
        setLoading(false); 
        if (controllerResponse.is_success) {
            dispatch(setUser(controllerResponse.data));
            // navigate("/home")
        } else {
            showAlert("error", controllerResponse.detail)
            setErrorMessage(controllerResponse.detail);
        }
        return;
    };

    return (
        <>
            <LoadingModal open={loading}/>
            <div className="app-color-bg-primary">
                <Container
                    component="main"
                    maxWidth="xs"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: 2,
                            p: 4,
                            borderRadius: 2,
                            backgroundColor: 'background.paper',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}  // Menyimpan input username
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}  // Menyimpan input password
                                autoComplete="current-password"
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }
                                }}
                            />
                            {/* Menampilkan pesan error jika ada */}
                            {errorMessage && (
                                <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                                    {errorMessage}
                                </Typography>
                            )}
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                                Sign In
                            </Button>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                Belum punya akun?{' '}
                                <Link href="/register" variant="body2">
                                    Daftar!
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </div>
        </>
    );
}

export default LoginPage;
