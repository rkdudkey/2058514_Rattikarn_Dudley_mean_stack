import { Record } from "./record.module";
import { Contact } from "./contact.module";

export let users:Array<Record> = [
    {firstName: "Adara", lastName: "Ulla" , userName: "Reed", password: "1234"},
    {firstName: "Claudia", lastName: "Bethany" , userName: "Steven", password: "1234"}
];

export let contactInfo:Array<Contact> = [
    {contactName: "Adara", phoneNumber : " 123456789", firstName : "Adara" },
    {contactName: "Adara-1", phoneNumber : " 987654321", firstName : "Adara" },
    {contactName: "Claudia", phoneNumber : " 6179876542", firstName : "Claudia" }
];