
export class StaffModel {
   fullName: string;
   userName: string;
   password:string;
   personalEmail:string;
   phoneNumber: string;
   typeContract:string;
   code: string;
   gender:string;
   address: string;
   cmnd:string;
   town:string;
   hireDate: string;
   country:string;
   religion:string;
   year:string;
   birthplace:string;
   marital_status:string;
   academic_standard:string ;
   education_level:string;
   ethnic:string;
   department:string;
   comment:string;
   position:string;
   status:boolean;
  constructor(fullName: string,password:string,userName:string, personalEmail: string, phoneNumber: string, typeContract: string, code: string, gender: string, address: string, cmnd: string, town: string, hireDate: string, country: string, religion: string, year: string, birthplace: string, marital_status: string, academic_standard: string, education_level: string, ethnic: string, department: string, comment: string, position: string,status:boolean) {
    this.fullName = fullName;
    this.userName=userName;
    this.password=password;
    this.personalEmail = personalEmail;
    this.phoneNumber = phoneNumber;
    this.typeContract = typeContract;
    this.code = code;
    this.gender = gender;
    this.address = address;
    this.cmnd = cmnd;
    this.town = town;
    this.hireDate = hireDate;
    this.country = country;
    this.religion = religion;
    this.year = year;
    this.birthplace = birthplace;
    this.marital_status = marital_status;
    this.academic_standard = academic_standard;
    this.education_level = education_level;
    this.ethnic = ethnic;
    this.department = department;
    this.comment = comment;
    this.position = position;
    this.status=status;
  }
}
