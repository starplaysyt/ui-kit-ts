import type {Permission} from "./auth/auth.ts";

export const KitPermissions: Permission[] = [
    {identifier: "general.operation.write", description: "TestDescription"},
    {identifier: "general.operation.read", description: "TestDescription"},
    {identifier: "general.operation.append", description: "TestDescription"},
    {identifier: "general.operation.reload", description: "TestDescription"},
    {identifier: "general.operation.cancel", description: "TestDescription"},
    {identifier: "general.operation.delete", description: "TestDescription"},
    {identifier: "general.operation.other", description: "TestDescription"},
];

export const UserGroups = [
    {name : "testname", title : "Tesing name", permissions : [
            "general.operation.read",
            "general.operation.delete",
            "general.operation.other",
        ]},
    {name : "testname", title : "Test name", permissions : ["general.operation.other", "general.operation.read"]},
]