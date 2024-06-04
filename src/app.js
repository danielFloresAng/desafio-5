import express from "express";
import handelbars from "express-handlebars";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import session from "express-session";
import FileStore from "session-file-store";
import MongoStore from "connect-mongo";

import config from "./config.js";
import socketInit from "./sockets.js";
import productsRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import viewsRouter from "./routes/views.routes.js";
import userIndexRouter from "./routes/userIndex.routes.js";
import sessionsRouter from "./routes/sessions.routes.js";

const app = express();

const httpInstance = app.listen(config.PORT, async () => {
  await mongoose.connect(config.MONGODB_URI);
});
console.log(
  `Servidor funcionando en puerto ${config.PORT} conectada a ${config.SERVER}`
);

const socketServer = socketInit(httpInstance);
const fileStorage = FileStore(session);

app.set("socketServer", socketServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: config.MONGODB_URI,
      ttl: 15,
      // mongoOptions: {useNewUrlParser: true, useUnifiedTopology:true},
    }),
    // store: new fileStorage({ path: "./sessions", ttl: 100, retries: 0 }),
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.engine("handlebars", handelbars.engine());
app.set("views", `${config.DIRNAME}/views`);
app.set("view engine", "handlebars");

app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);
app.use("/api/users", userIndexRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/static", express.static(`${config.DIRNAME}/public`));
