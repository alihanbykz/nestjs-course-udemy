import { Injectable } from "@nestjs/common";
import * as cloudinary from 'cloudinary';
import environment from "tools/environment/environment";

@Injectable()
export class UploadService {
    constructor() {
        cloudinary.v2.config({
            cloud_name : environment.cloudinary.cloud_name,
            api_key: environment.cloudinary.api_key,
            api_secret: environment.cloudinary.api_secret,
        });
    }

    /* async upload(file:any): Promise<any> {
        let result;
        try {
            await cloudinary.v2.uploader.upload(file.path, function(error,response) {
                result = response;
                return response;
            });
            return await result;   // Tek foto almak istersek kullanıyoruz
        } catch(err){
            return await err;
        } */
        async upload(files:any[]): Promise<any> {
            let result = [];
            try {
                for(const file of files){
                    await cloudinary.v2.uploader.upload(file.path, function(error,response) {
                        result.push(response);
                    });
                }
                
                return await result;   // Birden çok foto almak istersek kullanıyoruz
            } catch(err){
                return await err;
            } 

    }
}