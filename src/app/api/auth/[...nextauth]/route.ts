import axios from 'axios'
import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    updateAge: 30 * 60,
  },
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ user }) {
      if (user) {
        console.log('there is a user')
        return true
      }

      console.log('there is no user')
      return false
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.data = user
      }

      console.log('give me the token')
      return token
    },
    session: async ({ session, token }: { session: any; token: JWT }) => {
      if (token.data) {
        session.user = token.data
      }

      console.log('give me the session')
      return session
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
          {
            email: credentials?.email,
            password: credentials?.password,
          },
        )
        if (data) {
          return data
        }

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
