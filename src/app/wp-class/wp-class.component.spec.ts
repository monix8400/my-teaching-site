import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpClassComponent } from './wp-class.component';

describe('WPClassComponent', () => {
  let component: WpClassComponent;
  let fixture: ComponentFixture<WpClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WpClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
