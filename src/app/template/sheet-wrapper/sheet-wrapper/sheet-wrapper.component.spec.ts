import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatIconModule } from '@angular/material/icon';

import { NoteZoneModule } from 'src/app/note-zone/note-zone.module';
import { SheetConfigPanelModule } from 'src/app/sheet-config-panel/sheet-config-panel.module';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { SaveButtonComponent } from '../save-button/save-button.component';
import { SheetWrapperComponent } from './sheet-wrapper.component';

describe('SheetWrapperComponent', () => {
  let component: SheetWrapperComponent;
  let fixture: ComponentFixture<SheetWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetWrapperComponent, HomeButtonComponent, SaveButtonComponent ],
      imports: [ RouterTestingModule, MatIconModule, NoteZoneModule, SheetConfigPanelModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
