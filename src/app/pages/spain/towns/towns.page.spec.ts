import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TownsPage } from './towns.page';

describe('TownsPage', () => {
  let component: TownsPage;
  let fixture: ComponentFixture<TownsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TownsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
