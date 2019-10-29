import { Component, Input } from "@angular/core";

export class ProjectsRdbmsConfig {

    projectsRdbmsConfigId: BigInteger;
    connectionType: String;
    serverConnectionUrl: String;
    port: String;
    userName: String;
    isActive : Boolean;

}