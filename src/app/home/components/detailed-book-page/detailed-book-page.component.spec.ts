import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBookPageComponent } from './detailed-book-page.component';

describe('DetailedBookPageComponent', () => {
  let component: DetailedBookPageComponent;
  let fixture: ComponentFixture<DetailedBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedBookPageComponent]
    });
    fixture = TestBed.createComponent(DetailedBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
