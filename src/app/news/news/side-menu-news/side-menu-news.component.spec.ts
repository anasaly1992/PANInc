import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuNewsComponent } from './side-menu-news.component';

describe('SideMenuNewsComponent', () => {
  let component: SideMenuNewsComponent;
  let fixture: ComponentFixture<SideMenuNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
