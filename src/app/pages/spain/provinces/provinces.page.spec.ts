import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProvincesPage } from './provinces.page';

describe('ProvincesPage', () => {
  let component: ProvincesPage;
  let fixture: ComponentFixture<ProvincesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvincesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
