import type {MiddlewareFunction} from "react-router-dom";

export type Permission = {
    identifier : string,
    description : string | undefined,
}

export type UserPermissionsData = {
    userGroup: UserGroup | null | undefined,
    permissions: Permission[] | null | undefined,
}

export type UserGroup = {
    identifier: string,
    title: string,
    permissions: Permission[],
}

export const usePermIsAllowed = (userData: UserPermissionsData, permIdentifier : string) => {
    let result = false

    if (userData.userGroup)
        result = userData.userGroup.permissions.find(e => e.identifier === permIdentifier) !== undefined;
    if (result || !userData.permissions) return result;
    result = userData.permissions.find((e) => e.identifier === permIdentifier) !== undefined;
    return result;
}

export const useUserGroupIsAllowed = (userData: UserPermissionsData, groupIdentifier : string) => {
    return userData.userGroup?.identifier === groupIdentifier;
}

export const allowedMiddleware: MiddlewareFunction = (req, next) => {

}

