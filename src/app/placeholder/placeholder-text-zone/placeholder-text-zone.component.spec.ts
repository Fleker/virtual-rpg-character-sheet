import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PlaceholderTextZoneComponent } from './placeholder-text-zone.component';

describe('PlaceholderTextZoneComponent', () => {
  let component: PlaceholderTextZoneComponent;
  let fixture: ComponentFixture<PlaceholderTextZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderTextZoneComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderTextZoneComponent);
    component = fixture.componentInstance;
    component.config = {} as any;
    component.characterData = { values: { characterName: '' } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
