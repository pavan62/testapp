import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FPage } from './f.page';

describe('FPage', () => {
  let component: FPage;
  let fixture: ComponentFixture<FPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
