import {WorkSheet, readFile} from "xlsx";
import * as excel from "ts-xlsx";
import { IWorkSheet } from "ts-xlsx";

export class ExcelUtil
{
static readExcelSheet(filePath:string):IWorkSheet
{
let file = excel.readFile(filePath);
  let sheet = file.Sheets["Sheet2"];
  console.log(sheet);  
  return excel.utils.sheet_to_json<any>(sheet)[0];
 }
}