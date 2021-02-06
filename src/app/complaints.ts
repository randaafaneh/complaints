export class Complaints {
    public country: string;
    public complaint: string;
    public complaintType: string;
    
    constructor(country: string,complaint:string,complaintType:string) {
    this.country = country;
    this.complaint = complaint;
    this.complaintType = complaintType;
    }
    }