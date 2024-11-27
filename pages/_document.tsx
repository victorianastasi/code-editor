import Document, { Html, Head, Main, NextScript } from "next/document";
import Layout from "../src/components/Layout/layout";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="./favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/@gcba/obelisco-v2@1.4.2/dist/styles.min.css"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Esta pagina es una herramienta para probar los componentes de la libreria de obelisco en tiempo real, de manera que mediante el editor de codigo online puedas editar y visualizar los componentes antes de usarlos."
          />
        </Head>
        <body>
          <Layout>
            <Main />
          </Layout>
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
            integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
