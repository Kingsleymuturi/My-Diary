export class Diary {
  searchTest:string;
  displayInfo: boolean;
  constructor(public id:number, public name:string, public description:string, public createdOn:Date){
    this.displayInfo=false;
    }
}
