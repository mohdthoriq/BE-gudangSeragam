import express, { type Application, type Request, type Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { requestLogger } from "./middleware/logging.middleware";
import { successResponse } from "utils/response";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swagger';
import { errorHandler } from "middleware/errorHandler";

const app: Application = express();

app.use(
  express.json({
    verify: (req: any, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);
app.use(express.static('public'))
app.set('query parser', 'extended')
app.use(morgan('dev')) // Middleware logging HTTP request
// `morgan('dev')`: Middleware logging HTTP request. Format 'dev' memberikan output yang ringkas dan berwarna,
//                 sangat berguna saat pengembangan untuk melihat request yang masuk dan status responsnya.
app.use(helmet()) // Middleware keamanan header
// `helmet()`: Membantu mengamankan aplikasi Express dengan mengatur berbagai HTTP headers.
//             Ini melindungi dari beberapa kerentanan web yang diketahui seperti XSS.
app.use(cors()) // Middleware biar bisa di akses dari frontend
// `cors()`: Memungkinkan atau membatasi resource di server agar dapat diakses oleh domain lain (Cross-Origin Resource Sharing).
//           Sangat penting untuk API yang akan diakses oleh frontend dari domain berbeda.

app.use(requestLogger)

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


import authRoute from "./modules/auth/auth.route";
import categoryRoute from "./modules/category/category.route";
import productRoute from "./modules/product/product.route";
import variantRoute from "./modules/variant/variant.route";

app.get('/', (_req: Request, res: Response) => {
  successResponse(
    res,
    "Selamat datang di API E-Commerce!"
  )
})

app.use('/api/auth', authRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/products', productRoute);
app.use('/api/variants', variantRoute);

app.get(/.*/, (req: Request, res: Response) => {
  throw new Error(`Route ${req.originalUrl} tidak ada di API E-Commerce`);
})

app.use(errorHandler)


export default app;
