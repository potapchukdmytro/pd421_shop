import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useAction } from "../../hooks/useAction";

const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
        maxWidth: "450px",
    },
    boxShadow:
        "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
    ...theme.applyStyles("dark", {
        boxShadow:
            "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
    }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
    minHeight: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
    },
    "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        zIndex: -1,
        inset: 0,
        backgroundImage:
            "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
        backgroundRepeat: "no-repeat",
        ...theme.applyStyles("dark", {
            backgroundImage:
                "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
        }),
    },
}));

const RegisterPage = () => {
    const navigate = useNavigate();
    const { register } = useAction();

    const handleSubmit = (values) => {
        delete values.confirmPassword;
        const result = register(values);
        if (result) {
            navigate("/", { replace: true });
        }
    };

    const initValues = {
        email: "",
        password: "",
        confirmPassword: "",
    };

    const validScheme = Yup.object({
        email: Yup.string()
            .required("Обово'язкове поле")
            .email("Невірний формат пошти"),
        password: Yup.string()
            .required("Обово'язкове поле")
            .min(6, "Мінімальна довжина 6 символів"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Паролі повинні збігатися")
    });

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: handleSubmit,
        validationSchema: validScheme,
    });

    return (
        <>
            <CssBaseline enableColorScheme />
            <SignUpContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: "100%",
                            fontSize: "clamp(2rem, 10vw, 2.15rem)",
                        }}
                    >
                        Реєстрація
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel
                                error={
                                    formik.touched.email && formik.errors.email
                                }
                                htmlFor="email"
                            >
                                Пошта
                            </FormLabel>
                            <TextField
                                type="email"
                                name="email"
                                error={
                                    formik.touched.email && formik.errors.email
                                }
                                helperText={
                                    formik.touched.email
                                        ? formik.errors.email
                                        : ""
                                }
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                fullWidth
                                variant="outlined"
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel
                                error={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                                htmlFor="password"
                            >
                                Пароль
                            </FormLabel>
                            <TextField
                                error={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                                helperText={
                                    formik.touched.password
                                        ? formik.errors.password
                                        : ""
                                }
                                name="password"
                                placeholder="••••••"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                                variant="outlined"
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel
                                error={
                                    formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword
                                }
                                htmlFor="confirmPassword"
                            >
                                Підтвердити пароль
                            </FormLabel>
                            <TextField
                                error={
                                    formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword
                                }
                                helperText={
                                    formik.touched.confirmPassword
                                        ? formik.errors.confirmPassword
                                        : ""
                                }
                                name="confirmPassword"
                                placeholder="••••••"
                                type="password"
                                fullWidth
                                variant="outlined"
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                            />
                        </FormControl>
                        <Button
                            disabled={!formik.isValid}
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Зареєструватися
                        </Button>
                    </Box>
                </Card>
            </SignUpContainer>
        </>
    );
};

export default RegisterPage;
