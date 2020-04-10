import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoviTablePage } from './covi-table.page';

describe('CoviTablePage', () => {
  let component: CoviTablePage;
  let fixture: ComponentFixture<CoviTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoviTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoviTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
