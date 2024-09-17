import * as Yup from 'yup';
import { useFormik } from 'formik';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import { MuiOtpInput } from 'mui-one-time-password-input';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Link,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { paths } from 'src/paths';
import type { Page as PageType } from 'src/types/page';

interface Values {
  code: string;
}

const initialValues: Values = {
  code: ''
};

const validationSchema = Yup.object({
  code: Yup
    .string()
    .min(6)
    .max(6)
    .required('Code is required')
});

const Page: PageType = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (): void => {}
  });

  return (
    <>
      <Seo title="Verify Code" />
      <div>
        <Box sx={{ mb: 4 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            href={paths.dashboard.index}
            sx={{
              alignItems: 'center',
              display: 'inline-flex'
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="subtitle2">
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Stack
          sx={{ mb: 4 }}
          spacing={1}
        >
          <Typography variant="h5">
            Verify code
          </Typography>
        </Stack>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <FormControl error={!!(formik.touched.code && formik.errors.code)}>
            <FormLabel
              sx={{
                display: 'block',
                mb: 2
              }}
            >
              Code
            </FormLabel>
            <MuiOtpInput
              length={6}
              onBlur={() => formik.handleBlur('code')}
              onChange={(value) => formik.setFieldValue('code', value)}
              onFocus={() => formik.setFieldTouched('code')}
              sx={{
                '& .MuiFilledInput-input': {
                  p: '14px'
                }
              }}
              value={formik.values.code}
            />
            {!!(formik.touched.code && formik.errors.code) && (
              <FormHelperText>
                {formik.errors.code}
              </FormHelperText>
            )}
          </FormControl>
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type="submit"
            variant="contained"
          >
            Verify
          </Button>
        </form>
      </div>
    </>
  );
};

export default Page;