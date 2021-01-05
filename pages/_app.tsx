import '../styles/index.css'

function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Component {...pageProps} />
         <h3>Hello</h3>
      </div>
   )
}

export default MyApp
