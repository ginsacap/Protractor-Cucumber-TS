"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const excel = __importStar(require("ts-xlsx"));
class ExcelUtil {
    static readExcelSheet(filePath) {
        let file = excel.readFile(filePath);
        let sheet = file.Sheets["Sheet2"];
        console.log(sheet);
        return excel.utils.sheet_to_json(sheet)[0];
    }
}
exports.ExcelUtil = ExcelUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbHMvRXhjZWxVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLCtDQUFpQztBQUdqQyxNQUFhLFNBQVM7SUFFdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFlO1FBRXJDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNEO0FBVEQsOEJBU0MifQ==