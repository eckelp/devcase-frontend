import { MessageService } from 'primeng/components/common/messageservice';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  public static SUCCESS = "success";
  public static DANGER = "error";
  public static WANING = "warn";
  public static INFO = "info";

  constructor(private messageService: MessageService) { }


  private showMessage(severity, summary, detail) {
    this.messageService.add({ severity, summary, detail });
  }

  public showSuccess(summary, detail) {
    this.showMessage(PopupService.SUCCESS, "Login realizado", detail);
  }

  public showError(summary, detail) {
    this.showMessage(PopupService.DANGER, summary, detail);
  }

  public showWarn(summary, detail) {
    this.showMessage(PopupService.WANING, summary, detail);
  }

  public showInfo(summary, detail) {
    this.showMessage(PopupService.INFO, summary, detail);
  }
}
