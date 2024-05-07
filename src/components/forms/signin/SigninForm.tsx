'use client'

import { FC, useState } from 'react'
import { useToast } from '../../ui/use-toast'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { signinSchema } from '@/schemas/auth.schema'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LabeledInput from '../../shared/inputs/LabeledInput'
import { Button } from '../../ui/button'
import { signIn } from 'next-auth/react'

interface ISignInFormProps {}

const SigninForm: FC<ISignInFormProps> = () => {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const {
    values,
    getFieldProps,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormik<ISigninUserBody>({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: toFormikValidationSchema(signinSchema),
    onSubmit: () => {
      handleLogin(values)
    },
  })

  const handleLogin = async (values: ISigninUserBody): Promise<void> => {
    setIsLoading(true)
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })

    console.log(response)

    if (response) {
      router.push('/')
      router.refresh()
    } else {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
      })
      setIsLoading(false)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 flex flex-col justify-center m-8 p-8 rounded-xl gap-y-5 border border-secondary bg-secondary"
    >
      <LabeledInput
        label="Email"
        type="text"
        placeholder="Enter your email"
        autoComplete="on"
        {...getFieldProps('email')}
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
        <span className="-mt-3 text-red-600 text-xs font-semibold">
          {errors.email}
        </span>
      )}
      <LabeledInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        autoComplete="on"
        {...getFieldProps('password')}
        onChange={handleChange}
        value={values.password}
        onBlur={handleBlur}
      />
      {errors.password && touched.password && (
        <span className="-mt-3 text-red-600 text-xs font-semibold">
          {errors.password}
        </span>
      )}
      <Button type="submit" className="w-full mt-5" isLoading={isLoading}>
        Sign In
      </Button>
    </form>
  )
}

export default SigninForm
