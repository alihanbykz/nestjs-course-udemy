import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, } from 'express';
import * as jwt from'jsonwebtoken'
import environment from 'tools/environment/environment';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {

    const authJsonWebToken = req.headers.authorization;

    if (req.path !== '/api/login') {
        console.log("user yolu");
        //  login hariç tüm metodlarda token kotrolü yapıyoruz. çünkü token alabilmesi için login olması gerekiyor
        if(!authJsonWebToken){ // tokeni yoksa exception fırlatacak
            console.log("tokeni yok");
            next();
            throw new HttpException(
                'Jwt could not found!',
                HttpStatus.FORBIDDEN
            );
        }else{
            console.log("tokeni  var"); // tokeni varsa önceden hashlediğimiz bir tokenle uyuşmasına bakıp verify ediyoruz
            try {
                const user = jwt.verify(authJsonWebToken.slice(7, authJsonWebToken.length),  // kendi ürettiğimiz bir token old. emin olmak için verify edeceğiz.
                environment.jwtText,  // kendi ürettiğimiz bir token old. emin olmak için verify edeceğiz.
                ); 

                if(user){  // user varsa
                    console.log("user var");
                    req['user'] = user;  // requeste bir user ekliyip onu da user bilgisine eşitliyor.  ileride guardlarda işe yarayacak
                    next();
                }else{
                    console.log("user yok");
                    throw new HttpException(
                        'something went wrong!',
                        HttpStatus.GATEWAY_TIMEOUT,
                    );
                }
            } catch (ex) {
                console.log("hata var");
                throw new HttpException(ex.message, HttpStatus.UNAUTHORIZED);
            }
        }
    } else {
 
        console.log("login yolu");
        next();
        return;
    }
  }  // sonunda token middlewareyi her routeye ekliyoruz. bunun için appmodule gittik.
}
