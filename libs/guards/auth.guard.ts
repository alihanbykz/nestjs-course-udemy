import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GroupService } from "src/group/group.service";
import { GroupModel } from "tools/models/group.model";
import { RoleModel } from "tools/models/role.model";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private readonly reflector: Reflector,
        private readonly groupService: GroupService,
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const allowedRoles = this.reflector.get<string[]>('roles', context.getHandler());
        console.log("allowedRoles",allowedRoles);
        if(!allowedRoles) {
            console.log("İzin verilmedi");
            return true;
        }
        const request = context.switchToHttp().getRequest();
        console.log("request:",request.user.user._id)
        // console.log("request",request.user.user);
        const user = request.user.user;
        console.log(user);
        const allowed =  await this.isAllowed(allowedRoles, user.roles, user.groups);
        console.log("allowed",allowed);
    
        if (!allowed) {
            throw new HttpException('Forbidden Method!', HttpStatus.FORBIDDEN);
        }

        return true;
    }

    async isAllowed(allowedRoles,userRoles:RoleModel[],userGroups:GroupModel[]){
        const allUserRoles = [];
        userRoles.map(data => {
            allUserRoles.push(data.name);   // Login yaptığımız kullanıcı
            console.log(data);
            console.log("all user roles", allUserRoles);

        });
        await Promise.all(
            userGroups.map(async data => {
                console.log("usegroup map",data);
                const groupRoles = await this.groupService.findOne(data._id);  //
                console.log("all group roles", groupRoles);
                console.log("all group roles 0 ", groupRoles.roles);
                console.log("all user roles",allUserRoles)
                groupRoles.roles.map(resp => {
                    console.log("resp",resp['name']);
                    allUserRoles.push(resp['name']);
                    console.log("all user roles", allUserRoles);

                });
            })
        );
        console.log("allowed aa roles",allowedRoles);
        console.log("all user roles",allUserRoles);

        const hasRole = allUserRoles.some(role => allowedRoles.includes(role));
        console.log("hasRole", hasRole);
        
        return hasRole;
    }
}