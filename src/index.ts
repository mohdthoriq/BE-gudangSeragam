import app from "./app";
import { config } from './utils/env'

app.listen(config.PORT, () => {
    console.log(`Server running at → ${config.HOST},${config.PORT}`);
    console.log(`Coba buka semua route di atas pakai Postman!`);
});