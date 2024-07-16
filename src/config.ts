import dotenv from "dotenv";
dotenv.config();
import bunyan from "bunyan";


class Config{
    public DATABASE_URL: string | undefined;
    public JWT_TOKEN: string | undefined;
    public NODE_DEV: string | undefined;
    public SECRET_KEY_ONE: string | undefined;
    public SECRET_KEY_TWO: string | undefined;
    public CLIENT_URL: string | undefined;
    public REDIS_HOST: string | undefined;

    constructor(){
        this.DATABASE_URL = process.env.DATABASE_URL ||this.DATABASE_URL;
        this.JWT_TOKEN = process.env.JWT_TOKEN || '1234';
        this.NODE_DEV = process.env.NODE_DEV || '';
        this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
        this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
        this.CLIENT_URL = process.env.CLIENT_URL || '';
        this.REDIS_HOST = process.env.REDIS_HOST || '';
    }

    public createLogger(name: string): bunyan {
        return bunyan.createLogger({name, level: 'debug'})
    }

    public validateConfig(): void {
        for(const [key, value] of Object.entries(this)){
            if(value === undefined){
                throw new Error(`Configure ${key} is undifine`)
            }
        }
    }
}

export const config: Config = new Config(); 