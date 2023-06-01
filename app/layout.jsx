 
import Sidebar from '@/components/Sidebar/Sidebar'
import './globals.css'
import { Figtree} from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'A Spotify clone built with Next.js by Gino Peterson',
 }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
