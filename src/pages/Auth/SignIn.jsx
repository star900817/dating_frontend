import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ReactComponent as SmsIcon } from '../../assets/sms.svg';
import { ReactComponent as LockIcon } from '../../assets/lock.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#AC26FF', // Change the color here
          '&.Mui-checked': {
            color: '#AC26FF', // Change the color when checked
          },
        },
      },
    },
  },
});

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container
      className="container"
      component="main"
      maxWidth="xs"
      style={{
        marginTop: '4%',
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover', // You can adjust this property based on your needs
        padding: 0,
        borderRadius: '20px',
      }}
    >
      <Box
        sx={{
          marginTop: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className="header"
          style={{
            textAlign: 'center',
            paddingTop: '90px',
            fontSize: '24px',
            fontWeight: 'bold',
            font: 'Noto Sans JP',
            color: 'white',
            width: '100%',
            height: '200px',
            backgroundImage: 'url(/header-image.png)',
            backgroundSize: 'cover',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        >
          婚外チャンネル
        </div>
        <div
          className="sign_title"
          style={{
            color: '#AC26FF',
            marginBottom: '8px',
            font: 'Noto Sans JP',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
          ログイン
        </div>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box
            sx={{ display: 'flex', alignItems: 'flex-end' }}
            style={{ marginBottom: '12px' }}
          >
            <SmsIcon style={{ marginRight: '10px' }} />
            <TextField
              fullWidth
              id="email"
              name="email"
              type="email"
              label="メールアドレス"
              variant="standard"
            />
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'flex-end' }}
            style={{ marginBottom: '24px' }}
          >
            <LockIcon style={{ marginRight: '10px' }} />
            <TextField
              fullWidth
              id="password"
              name="password"
              type="password"
              label="パスワード"
              variant="standard"
            />
          </Box>
          <div style={{ marginBottom: '50px' }}>
            <ThemeProvider theme={theme}>
              <Checkbox value="remember" color="primary" />
            </ThemeProvider>{' '}
            <label>次回から自動でログインする</label>
          </div>
          <Button
            className="login_btn"
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 4,
              backgroundImage: 'linear-gradient(to right, #DC52FF, #887EFF)',
              color: 'white', // Change the background color here
              borderRadius: '25px',
              height: '42px',
            }}
          >
            ログイン
          </Button>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ marginBottom: '3px' }}>
              パスワードを忘れた方は
              <Link
                href="#"
                variant="body2"
                style={{
                  color: '#AD26FF',
                  fontStyle: 'Inter',
                  fontSize: '16px',
                  textDecoration: 'none',
                }}
              >
                こちら
              </Link>
            </div>
            <div>
              アカウントをお持ちでない方は
              <RouterLink
                to="/signup"
                href="#"
                variant="body2"
                style={{
                  color: '#AD26FF',
                  fontStyle: 'Inter',
                  fontSize: '16px',
                  textDecoration: 'none',
                }}
              >
                こちら
              </RouterLink>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
