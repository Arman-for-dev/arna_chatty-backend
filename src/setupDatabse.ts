import mongoose from "mongoose";
import { config } from "./config";
import Logger from "bunyan";
const log: Logger = config.createLogger('database');


export default () =>{
    const connect = () =>{
        mongoose.connect(`${config.DATABASE_URL}`)
            .then(()=>{
                log.info(`Database connected!!`)
            })
            .catch((error)=>{
                log.error(`Error connecting to database`, error);
                return process.exit(1);
            });
    }
    connect();
    mongoose.connection.on('disconnect', connect)
}