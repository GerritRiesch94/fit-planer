import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
})
export class LanguageSwitchComponent {
  public languages: { id: string; value: string }[] = [
    { id: '0', value: 'en-US' },
    { id: '1', value: 'de-DE' },
  ];

  constructor(private readonly translateService: TranslateService) {}

  changeLanguage(selectedId: string) {
    const matchingLanguage = this.languages.find((language) => language.id === selectedId);
    if (matchingLanguage) {
      this.translateService.use(matchingLanguage.value);
    }
  }
}
