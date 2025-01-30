import { Container, Typography, TextField, Button, Box, Link, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { userRegister } from '../../controllers/user';
import LoadingModal from '../modals/LoadingModal';
import { wait } from '../../util/time';
import { useAlert } from '../alert/AlertContext';
import { setTitle } from '../../DOM';

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');
    const { showAlert } = useAlert();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() =>{ setTitle("KeuanganKu - Register")} , [])

    const clearForm = () => {
        setFormData({
            name: '',
            username: '',
            password: '',
            confirmPassword: '',
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Password dan Konfirmasi Password tidak cocok!');
            return;
        }
        setError('');
        setLoading(true);
        const controllerResponse = await userRegister(formData.name, formData.username, formData.password);
        await wait(500);
        setLoading(false);
        if (controllerResponse.is_success) {
            showAlert('success', 'Registrasi berhasil');
            clearForm();
        } else {
            setError(controllerResponse.detail);
            showAlert('error', controllerResponse.detail);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <LoadingModal open={loading} />
            <div className='app-color-bg-primary'>
                <Container
                    component='main'
                    maxWidth='xs'
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
                        <Typography component='h1' variant='h5'>
                            Register
                        </Typography>
                        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='name'
                                label='Name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete='name'
                                autoFocus
                            />
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='username'
                                label='Username'
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                autoComplete='username'
                            />
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete='new-password'
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
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='confirmPassword'
                                label='Confirm Password'
                                type={showPassword ? 'text' : 'password'}
                                id='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                autoComplete='new-password'
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
                            {error && (
                                <Typography color='error' variant='body2' sx={{ mt: 2 }}>
                                    {error}
                                </Typography>
                            )}
                            <Button type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
                                Register
                            </Button>
                            <Typography variant='body2' sx={{ mt: 2 }}>
                                Sudah punya akun?{' '}
                                <Link href='/login' variant='body2'>
                                    Masuk
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </div>
        </>
    );
}

export default RegisterPage;