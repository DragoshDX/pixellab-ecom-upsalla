import { Work_Sans } from 'next/font/google';
import { css } from '@emotion/css';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Pixellab Ecom Upsalla',
  description: 'Our first ecommerce app',
};

export default function RootLayout({ children }) {
  const gridCss = css`
    display: grid;
    grid-template-areas:
      'header'
      'main-area';
    min-height: 100dvh;
  `;

  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className={gridCss}>
          <header>header</header>

          <div>
            <main>{children}</main>

            <footer>footer</footer>
          </div>
        </div>
      </body>
    </html>
  );
}
