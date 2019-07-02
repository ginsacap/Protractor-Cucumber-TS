import * as json from "load-json-file";
import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import loadJsonFile = require("load-json-file");
import { JsonObject } from "type-fest";
import { ExcelUtil } from '../utils/ExcelUtil';
import { Then } from 'cucumber';

export class ReadingDataJson{
  txtName : ElementFinder;
  txtEmail: ElementFinder;
  //txtSearch: ElementFinder;
     
  constructor()   {
    this.txtName = element(by.css('name'));
    this.txtEmail = element(by.css('email'));
    //this.txtSearch = element(by.css("input[type='search']"));
  }
   selectOpt(opt:any)
  {
    element(by.css("[id='exampleFormControlSelect1']option")).click().then(async()=>{
     await element(by.tagname('option')).getText().then(async(option)=>{
       console.log(option);
       if (option == opt)
       {
         opt.click();
         }

      })

    })
  }

  async readDataFromJson()   {
    await loadJsonFile("./StepDefinitions/data.json").then((x) => {
      console.log(x);
      //this.searchText.sendKeys((<any>x).searchValue);
      //this.txtName      
    })
  }

  async readDataFromExcel()  {
    let sheet = <searchData>ExcelUtil.readExcelSheet("./StepDefinitions/data.xlsx");
    // let userName = sheet.searchValue;
    // let eMail = sheet.courseTitle;
    //console.log(sheet);     
    //console.log(sheet.searchValue);
    // console.log(sheet.courseTitle);
    element(by.css("input[type='search']")).sendKeys(sheet.searchValue);
    // this.txtName.sendKeys(sheet.searchValue);
    // this.txtEmail.sendKeys(eMail);
  }   
}

interface searchData{

  searchValue: string,
  courseTitle:string
  
}   

