import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '300', '200', '500', '600', '700'],
});

export const metadata = {
  title: 'Apartments Sales',
  description: 'Apartments Sales website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
