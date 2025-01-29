import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';

function LoginPage() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Login submitted');
    };

    return (
        <div className='app-color-bg-primary'>
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
                            autoComplete="current-password"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                            Sign In
                        </Button>
                        {/* Tambahan teks "Belum punya akun? Daftar!" */}
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
    );
}

export default LoginPage;
