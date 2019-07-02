import { element, by } from "protractor";

export enum IdentificationType{
  Id,
  Name,
  Css,
  Xpth,
  TagName,
  LinkText,
  Model,
  Repeater
}

export class BasePage {

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
        return element(by.id(obj.value));
      case IdentificationType[IdentificationType.Name]:
        return element(by.id(obj.value));
      case IdentificationType[IdentificationType.Css]:
        return element(by.id(obj.value));
      case IdentificationType[IdentificationType.LinkText]:
        return element(by.id(obj.value));
      case IdentificationType[IdentificationType.Repeater]:
        return element(by.id(obj.value));
      case IdentificationType[IdentificationType.Model]:
        return element(by.id(obj.value));
      case IdentificationType[IdentificationType.TagName]:
        return element(by.id(obj.value));
      default:
        break;
      
    }
    
  }
}