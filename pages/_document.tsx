// Pages in Next.js skip the definition of the surrounding document's markup. For example, you never include <html>, <body>, etc.
// To override that default behavior, you must create a file at ./pages/_document.js, where you can extend the Document class.

// Note: _document.js is only rendered on the server side and not on the client side.
// so event handlers like onClick is not going to work.

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel='preconnect' href='https://fonts.gstatic.com' />
               <link
                  href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
                  rel='stylesheet'
               />
            </Head>
            <body className='bg-gray-900 '>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
