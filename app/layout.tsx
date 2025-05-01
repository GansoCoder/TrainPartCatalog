import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Armazém CP de Campolide',
  description: 'Catalog for 2300 and 3500 series trains',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Armazém CP de Campolide</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
