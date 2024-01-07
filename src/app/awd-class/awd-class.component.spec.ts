import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwdClassComponent } from './awd-class.component';

describe('AWDClassComponent', () => {
  let component: AwdClassComponent;
  let fixture: ComponentFixture<AwdClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwdClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwdClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
