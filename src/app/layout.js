// app/layout.jsx
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { AuthProvider } from "./../components/providers/authProvider"
import { LoadingProvider } from "./../components/providers/LoadingProvider"
import MainNav from '@/components/common/MainNav'
import Footer from '@/components/common/Footer'
import ShopNav from '@/components/common/ShopNav'
import ShopFooter from '@/components/common/ShopFooter'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }) {
  const headersList = await headers()
  const domain = headersList.get('host') || ''
  const isShopSubdomain = domain.includes('pocketshop.gr') && domain.split('.')[0] !== 'www'
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <LoadingProvider>
            {isShopSubdomain ? (
              <div className="relative flex flex-col min-h-screen bg-[#242424]">
                <ShopNav className="relative z-10" />
                <main className="flex-1 relative z-10">{children}</main>
                <ShopFooter className="relative z-10" />
              </div>
            ) : (
              <div className="relative flex flex-col min-h-screen bg-[#242424]">
                <MainNav className="relative z-10" />
                <main className="flex-1 relative z-10">{children}</main>
                <Footer className="relative z-10" />
              </div>
            )}
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  )
}