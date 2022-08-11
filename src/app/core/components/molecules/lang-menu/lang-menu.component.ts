import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-menu',
  templateUrl: './lang-menu.component.html',
  styleUrls: ['./lang-menu.component.scss'],
})
export class LangMenuComponent implements OnInit {
  isOpen = false;
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
  constructor(
    private elementRef: ElementRef,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {}

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
