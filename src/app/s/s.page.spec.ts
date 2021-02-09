import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SPage } from './s.page';

describe('SPage', () => {
  let component: SPage;
  let fixture: ComponentFixture<SPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
