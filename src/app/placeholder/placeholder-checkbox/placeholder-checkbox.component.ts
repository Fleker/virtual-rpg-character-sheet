import { Component, Input } from '@angular/core';

import { CharacterData } from 'src/app/model/character-data.model';
import { CheckboxPlaceholderConfig } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-placeholder-checkbox',
  templateUrl: './placeholder-checkbox.component.html',
  styleUrls: ['./placeholder-checkbox.component.scss']
})
export class PlaceholderCheckboxComponent {
  @Input() config: CheckboxPlaceholderConfig;
  @Input() characterData: CharacterData;
}
