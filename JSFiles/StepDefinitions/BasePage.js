"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Id"] = 0] = "Id";
    IdentificationType[IdentificationType["Name"] = 1] = "Name";
    IdentificationType[IdentificationType["Css"] = 2] = "Css";
    IdentificationType[IdentificationType["Xpth"] = 3] = "Xpth";
    IdentificationType[IdentificationType["TagName"] = 4] = "TagName";
    IdentificationType[IdentificationType["LinkText"] = 5] = "LinkText";
    IdentificationType[IdentificationType["Model"] = 6] = "Model";
    IdentificationType[IdentificationType["Repeater"] = 7] = "Repeater";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
class BasePage {
    // ElementLocator(obj) {
    //   // Object identification using CSS
    //   if (obj.type == IdentificationType[IdentificationType.Css])
    //     return element(by.css(obj.value));
    //   else if (obj.type == IdentificationType[IdentificationType.Model])
    //     return element(by.model(obj.value));
    //   else if (obj.type == IdentificationType[IdentificationType.Ids])
    //   return element(by.id(obj.value));
    // }
    ElementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Repeater]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Model]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.TagName]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            default:
                break;
        }
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvQmFzZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFFekMsSUFBWSxrQkFTWDtBQVRELFdBQVksa0JBQWtCO0lBQzVCLHVEQUFFLENBQUE7SUFDRiwyREFBSSxDQUFBO0lBQ0oseURBQUcsQ0FBQTtJQUNILDJEQUFJLENBQUE7SUFDSixpRUFBTyxDQUFBO0lBQ1AsbUVBQVEsQ0FBQTtJQUNSLDZEQUFLLENBQUE7SUFDTCxtRUFBUSxDQUFBO0FBQ1YsQ0FBQyxFQVRXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBUzdCO0FBRUQsTUFBYSxRQUFRO0lBRW5CLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsZ0VBQWdFO0lBQ2hFLHlDQUF5QztJQUV6Qyx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBRTNDLHFFQUFxRTtJQUNyRSxzQ0FBc0M7SUFFdEMsSUFBSTtJQUVKLGNBQWMsQ0FBQyxHQUFHO1FBQ2hCLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNoQixLQUFLLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQztnQkFDNUMsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkMsS0FBSyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzlDLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEtBQUssa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDO2dCQUM3QyxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxLQUFLLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztnQkFDbEQsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkMsS0FBSyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xELE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEtBQUssa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2dCQUMvQyxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxLQUFLLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDakQsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkM7Z0JBQ0UsTUFBTTtTQUVUO0lBRUgsQ0FBQztDQUNGO0FBckNELDRCQXFDQyJ9