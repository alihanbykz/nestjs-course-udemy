import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { UploadService } from "./upload.service";
import { diskStorage } from "multer";
import { extname } from "path";
import { ApiTags } from "@nestjs/swagger";

const storageOptions = diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}.${extname(file.originalname)}`);
    }
})

@ApiTags('upload')
@Controller('upload')
export class UploadController{
    constructor(private readonly uploadService: UploadService){
        
    }

    @Post()
    @UseInterceptors(FilesInterceptor('files', 20, {storage: storageOptions}))     // FilesInterceptor('file', {storage: storageOptions}) Birden fazla almak istersek
    // @UseInterceptors(FileInterceptor('file', {storage: storageOptions}))   // Bunu tek foto almak istersek kullanıyoruz
    async uploadFile(@UploadedFiles() files): Promise<any> {
        return this.uploadService.upload(files);
    }
}