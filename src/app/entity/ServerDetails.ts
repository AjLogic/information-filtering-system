import { Component, Input } from "@angular/core";

export class ServerDetails {
  databaseIPAddress :string;
  rdbmsDriverType:string
  user:string;
  password:string
  isActive:boolean
}