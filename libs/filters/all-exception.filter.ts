import { ArgumentsHost, Catch, RpcExceptionFilter } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
/**
 Yazdğımız exception filter tüm servis üzerinde çalışacağı için main.ts içine yazarız.
 Ama görmek istediğimiz başka bir servisin içine de yazılabilir.
 */
@Catch()
export class AllExceptionFilter extends BaseExceptionFilter{ 
    catch(exception, host: ArgumentsHost){
         const ctx = host.switchToHttp();  //Gelen host httpye çevriliyor.
         const request = ctx.getRequest(); //Request alıyor
         const response = ctx.getResponse(); //Response alıyor
         return response.status(500).json({exception}); // json şeklinde standart 500 hatası dönüyor
    }
}