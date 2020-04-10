import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoviCardPage } from './covi-card.page';

describe('CoviCardPage', () => {
  let component: CoviCardPage;
  let fixture: ComponentFixture<CoviCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoviCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoviCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
