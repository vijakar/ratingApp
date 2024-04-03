import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaAppComponent } from './text-area-app.component';

describe('TextAreaAppComponent', () => {
  let component: TextAreaAppComponent;
  let fixture: ComponentFixture<TextAreaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreaAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
